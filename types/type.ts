import { RefObject } from "react";

export interface IPlaylist {
  title: string;
  artist: string;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IButtons {
  text: string;
  onClick: () => void;
}

export interface ITextForm {
  inputRef: RefObject<HTMLInputElement>;
  textRef: RefObject<HTMLTextAreaElement>;
  onTitleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onContentsChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  title?: string;
  contents?: string;
}

export interface IHeader {
  title: string;
  subtitle?: string;
  width?: string;
  border?: string;
}
