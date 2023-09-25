import { Model, Types } from "mongoose";
import { IBook } from "../Books/books.interface";
import { IUser } from "../User/user.interface";

export type IWishList = {
  _id?: Types.ObjectId;
  bookId: Types.ObjectId | IBook | null;
  userId: Types.ObjectId | IUser;
}

export type IWishListExist = {
  _id: Types.ObjectId | null;
  bookId: Types.ObjectId | IBook | null;
  userId: Types.ObjectId | IUser | null;
}

export type IDetails = {
  userId: string;
  bookId: string;
}
export type WishListModel = {
  isWishListExist(payload: IDetails): Promise<IWishListExist>;
} & Model<IWishList>
