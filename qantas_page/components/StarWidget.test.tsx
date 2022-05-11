import React from "react";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StarWidget from "./StarWidget";


describe("starWidget", () => {
    it("should render 5 stars", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={5} type="star" />
        )
        const stars = getAllByTestId("StarRateIcon");
        expect(stars.length).toBe(5);
    });

    it("should render 4 stars", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={4} type="star" />
        )
        const full_stars = getAllByTestId("StarRateIcon");
        expect(full_stars.length).toBe(4);
        const empty_stars = getAllByTestId("StarOutlineIcon");
        expect(empty_stars.length).toBe(1);
    });

    it("should render 0 stars", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={0} type="star" />
        );
        const empty_stars = getAllByTestId("StarOutlineIcon");
        expect(empty_stars.length).toBe(5);
    });
    it("should render 1.5 stars", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={1.5} type="star" />
        );
        const full_stars = getAllByTestId("StarRateIcon");
        expect(full_stars.length).toBe(1);
        const half_stars = getAllByTestId("StarHalfIcon");
        expect(half_stars.length).toBe(1);
        const empty_stars = getAllByTestId("StarOutlineIcon");
        expect(empty_stars.length).toBe(3);
    });

    it("should render 3 stars for a rating of 3.2", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={3.2} type="star" />
        );
        const full_stars = getAllByTestId("StarRateIcon");
        expect(full_stars.length).toBe(3);
        const empty_stars = getAllByTestId("StarOutlineIcon");
        expect(empty_stars.length).toBe(2);
    });

    it("should render 3.5 stars for a rating of 3.7", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={3.7} type="star" />
        );
        const full_stars = getAllByTestId("StarRateIcon");
        expect(full_stars.length).toBe(3);
        const half_stars = getAllByTestId("StarHalfIcon");
        expect(half_stars.length).toBe(1);
        const empty_stars = getAllByTestId("StarOutlineIcon");
        expect(empty_stars.length).toBe(1);
    });
    
    it("should render 5 circles", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={5} type="self" />
        )
        const stars = getAllByTestId("CircleIcon");
        expect(stars.length).toBe(5);
    });

    it("should render 4 circles", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={4} type="self" />
        )
        const full_stars = getAllByTestId("CircleIcon");
        expect(full_stars.length).toBe(4);
        const empty_stars = getAllByTestId("CircleOutlinedIcon");
        expect(empty_stars.length).toBe(1);
    });

    it("should render 0 circles", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={0} type="self" />
        );
        const empty_stars = getAllByTestId("CircleOutlinedIcon");
        expect(empty_stars.length).toBe(5);
    });
    it("should render 1.5 circles", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={1.5} type="self" />
        );
        const full_stars = getAllByTestId("CircleIcon");
        expect(full_stars.length).toBe(1);
        const half_stars = getAllByTestId("ContrastIcon");
        expect(half_stars.length).toBe(1);
        const empty_stars = getAllByTestId("CircleOutlinedIcon");
        expect(empty_stars.length).toBe(3);
    });

    it("should render 3 circles for a rating of 3.2", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={3.2} type="self" />
        );
        const full_stars = getAllByTestId("CircleIcon");
        expect(full_stars.length).toBe(3);
        const empty_stars = getAllByTestId("CircleOutlinedIcon");
        expect(empty_stars.length).toBe(2);
    });

    it("should render 3.5 circles for a rating of 3.7", () => {
        const { getAllByTestId } = render(
            <StarWidget rating={3.7} type="self" />
        );
        const full_stars = getAllByTestId("CircleIcon");
        expect(full_stars.length).toBe(3);
        const half_stars = getAllByTestId("ContrastIcon");
        expect(half_stars.length).toBe(1);
        const empty_stars = getAllByTestId("CircleOutlinedIcon");
        expect(empty_stars.length).toBe(1);
    });

});