import React from "react";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CancellationGrid from "./CancellationGrid";
import { OfferObj } from "../types/hotel-listing-types";
import PriceGrid from "./PriceGrid";

describe("price grid component", () => {
    it("should display offer info, but no savings if null savings in offer prop", () => {
        const currency = "USD";
        const amount = 235;
        const offerMock: OfferObj = {
            displayPrice: {
                amount,
                currency
            },
            promotion: {
                title: "Exclusive Deal",
                type: "MEMBER"
            },
            name: "Deluxe Queen",
            savings: null,
            cancellationOption:{
                cancellationType: "FREE_CANCELLATION"
            }
        }
        const { getByText, getByTestId } = render(
            <PriceGrid offer={offerMock} />
        )
        const totalNights = getByText(`1 night total (${currency})`);
        expect(totalNights).toBeDefined();
        const price = getByText(`$${amount}`);
        expect(price).toBeDefined();
        const savings = getByTestId("savings");
        expect(savings).toBeEmptyDOMElement();     
    });

    it("should display savings info if present in offer prop", () => {
        const currency = "USD";
        const amount = 235;
        const savings = 28.0000
        const offerMock: OfferObj = {
            displayPrice: {
                amount,
                currency
            },
            promotion: {
                title: "Exclusive Deal",
                type: "MEMBER"
            },
            name: "Deluxe Queen",
            savings: {
                "amount": savings,
                currency
            },
            cancellationOption:{
                cancellationType: "FREE_CANCELLATION"
            }
        }
        const { getByText, getByTestId } = render(
            <PriceGrid offer={offerMock} />
        )
        const totalNights = getByText(`1 night total (${currency})`);
        expect(totalNights).toBeDefined();
        const price = getByText(`$${amount}`);
        expect(price).toBeDefined();
        const saving = getByText(`Save $${savings}~`);
        expect(saving).toBeDefined();  
    });
});