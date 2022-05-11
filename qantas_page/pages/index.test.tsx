import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {within} from '@testing-library/dom'
import "@testing-library/jest-dom/extend-expect";
import HotelList from ".";

describe("Index page", () => {
    it("should show 5 hotels from the'api", () => {
        const { getByText } = render(
            <HotelList/>
        )
        const text = getByText("5 hotels in Sydney");
        expect(text).toBeDefined();
    });
    it("should render the sortBy dropdown", () => {
        const { getByTitle } = render(
            <HotelList/>
        )
        const text = getByTitle("Sort By");
        expect(text).toBeDefined();
    });
    it("changing the sortBy dropdown to Price high-low sorts the hotels in decreasing price order ", () => {
        const { getByTestId } = render(
            <HotelList/>
        )
        const sortBy = getByTestId("sortBy");
        const sortByOptions = sortBy.children;
        // fireEvent.change(sortBy, {target: {value: 'decreasing'}})
        // fireEvent.click(sortByOptions[1]);
        fireEvent.change(sortBy, {
            target: {value: 'decreasing'},
          });
        const results = getByTestId("results");
        expect(results).toMatchSnapshot();
        const { getAllByTestId } = within(results);
        const items = getAllByTestId("hotelListing");
        expect(items.length).toBe(5);
        // first item is the highest priced
        const name1 = within(items[0]).getByText("PARKROYAL Darling Harbour Sydney");
        expect(name1).toBeDefined();
        const name2= within(items[4]).getByText("Rydges World Square Sydney");
        expect(name2).toBeDefined();
    });

    it("changing the sortBy dropdown to Price low-high sorts the hotels in increasing price order ", () => {
        const { getByTestId } = render(
            <HotelList/>
        )
        const sortBy = getByTestId("sortBy");
        const sortByOptions = sortBy.children;
        // fireEvent.change(sortBy, {target: {value: 'decreasing'}})
        // fireEvent.click(sortByOptions[1]);
        fireEvent.change(sortBy, {
            target: {value: 'increasing'},
          });
        const results = getByTestId("results");
        expect(results).toMatchSnapshot();
        const { getAllByTestId } = within(results);
        const items = getAllByTestId("hotelListing");
        const name2= within(items[0]).getByText("Rydges World Square Sydney");
        expect(name2).toBeDefined();
        const name1 = within(items[4]).getByText("PARKROYAL Darling Harbour Sydney");
        expect(name1).toBeDefined();
    });
});