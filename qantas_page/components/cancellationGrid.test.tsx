import React from "react";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CancellationGrid from "./CancellationGrid";

describe("cancellation grid component", () => {
    it("should render 'free cancellation' if cancellationType is free", () => {
        const { getByText } = render(
            <CancellationGrid cancelType="FREE_CANCELLATION" />
        )
        const text = getByText("Free cancellation");
        expect(text).toBeDefined();
    });

    it("should render '' if cancellationType is not free", () => {
        const { getByTestId } = render(
            <CancellationGrid cancelType="NOT_REFUNDABLE" />
        )
        const text = getByTestId("cancelDiv");
        expect(text).toBeDefined();
    });
});