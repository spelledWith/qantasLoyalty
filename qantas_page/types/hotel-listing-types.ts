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



export interface RatingObj {
    ratingValue: number;
    ratingType: ("self"|"star");
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