import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SearchBookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SearchBook {
  readonly id: string;
  readonly Search?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SearchBook, SearchBookMetaData>);
  static copyOf(source: SearchBook, mutator: (draft: MutableModel<SearchBook, SearchBookMetaData>) => MutableModel<SearchBook, SearchBookMetaData> | void): SearchBook;
}