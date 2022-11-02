import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export const GET_LIST = gql`
  query getBoards($page: Int) {
    fetchBoards(page: $page) {
      number
      title
      createdAt
    }
  }
`;

export const GET_POST = gql`
  query getBoard($postId: Int) {
    fetchBoard(number: $postId) {
      number
      createdAt
      title
      contents
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      _id
      number
      message
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: Int) {
    deleteBoard(number: $postId) {
      _id
      number
      message
    }
  }
`;
