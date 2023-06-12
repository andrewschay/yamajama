import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MomentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GoalsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Moments {
  readonly id: string;
  readonly when?: string | null;
  readonly notes?: string | null;
  readonly value?: number | null;
  readonly goalsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Moments, MomentsMetaData>);
  static copyOf(source: Moments, mutator: (draft: MutableModel<Moments, MomentsMetaData>) => MutableModel<Moments, MomentsMetaData> | void): Moments;
}

export declare class Goals {
  readonly id: string;
  readonly name?: string | null;
  readonly notes?: string | null;
  readonly Moments?: (Moments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Goals, GoalsMetaData>);
  static copyOf(source: Goals, mutator: (draft: MutableModel<Goals, GoalsMetaData>) => MutableModel<Goals, GoalsMetaData> | void): Goals;
}