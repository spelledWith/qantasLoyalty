import { ValueLabelProps } from "@mui/base";

export interface PriceObj {
    amount: number;
    currency: string;
}

export interface ImageObj {
    url: string;
    caption: string;
    imageType: string;
}

enum RatingType {
    "self",
    "star",
}

export interface RatingObj {
    ratingValue: number;
    ratingType: RatingType;
}

export interface PromotionObj {
    title: string;
    type: string;
}

export interface CancelObject {
    cancellationType: string;
}

export interface PropertyObj {
    propertyId: string;
    title: string;
    address: string[];
    previewImage: ImageObj;
    rating: RatingObj;
}

export interface OfferObj {
    promotion: PromotionObj;
    name: string;
    displayPrice: PriceObj;
    savings: (PriceObj | null);
    cancellationOption: CancelObject;
}

export interface HotelListObj {
    id: string;
    property: PropertyObj;
    offer: OfferObj;
}