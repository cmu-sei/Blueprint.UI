// Copyright 2022 Carnegie Mellon University. All Rights Reserved.
// Released under a MIT (SEI)-style license. See LICENSE.md in the project root for license information.

import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import { CatalogInject } from 'src/app/generated/blueprint.api';
import { Injectable } from '@angular/core';

export interface CatalogInjectState extends EntityState<CatalogInject> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'catalogInjects' })
export class CatalogInjectStore extends EntityStore<CatalogInjectState> {
  constructor() {
    super();
  }
}
