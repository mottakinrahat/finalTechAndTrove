import { SxProps } from "@mui/material";

export interface heroSection {
  sx: SxProps;
  upperText?: string;
  title?: string;
  buttonText?: string;
}
export interface TPropertiesType {
  _id?: string;
  propertyImage: string;
  propertyName: string;
  location: string;
  price: number;
  propertyType: string;
  propertyArea: number;
  IsDeleted: boolean;
  rating: number;
  status: string;
}
export interface TListedCardProps {
  propertiesData: TPropertiesType[];
}
export interface TTestimonialType {
  _id: string;
  userImage: string;
  userName: string;
  userDesignation: string;
  userTestimonial: string;
  userRating: number;
}
export interface TTestimonialProps {
  testimonialData: TTestimonialType[];
}
