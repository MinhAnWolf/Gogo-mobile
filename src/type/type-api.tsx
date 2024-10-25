export type RequestAuthentication = {
  email: string;
  password: string;
};

export type ResponseAuthentication = {
  errCode: string;
  message: string;
  token: string;
  rf: string;
  uid: string;
};

export type PageSearch = {
  keyWord: string;
  page: number;
  size: number;
  sortField: string;
  sortType: string;
};

export type PageResponse = {
  content: [];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: false;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
};
