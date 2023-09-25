import { Model, Types } from "mongoose";
import { IBook } from "../Books/books.interface";
import { IUser } from "../User/user.interface";

export type IReadList = {
  _id?: Types.ObjectId;
  bookId: Types.ObjectId | IBook | null;
  userId: Types.ObjectId | IUser;
  status: string;
}

export type IReadListExist = {
  _id: Types.ObjectId | null;
  bookId: Types.ObjectId | IBook | null;
  userId: Types.ObjectId | IUser | null;
  status: string;
}

export type IDetails = {
  userId: string;
  bookId: string;
  status: string;
}
export type ReadListModel = {
  isReadListExist(payload: IDetails): Promise<IReadListExist>;
} & Model<IReadList>
