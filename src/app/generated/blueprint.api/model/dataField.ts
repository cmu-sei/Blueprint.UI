/*
 Copyright 2024 Carnegie Mellon University. All Rights Reserved.
 Released under a MIT (SEI)-style license. See LICENSE.md in the
 project root for license information.
*/

/**
 * Blueprint API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DataFieldType } from './dataFieldType';
import { DataOption } from './dataOption';


export interface DataField { 
    dateCreated?: Date;
    dateModified?: Date | null;
    createdBy?: string;
    modifiedBy?: string | null;
    id?: string;
    mselId?: string | null;
    injectTypeId?: string | null;
    name?: string | null;
    dataType?: DataFieldType;
    displayOrder?: number;
    onScenarioEventList?: boolean;
    onExerciseView?: boolean;
    isChosenFromList?: boolean;
    dataOptions?: Array<DataOption> | null;
    cellMetadata?: string | null;
    columnMetadata?: string | null;
    isInitiallyHidden?: boolean;
    isOnlyShownToOwners?: boolean;
    galleryArticleParameter?: string | null;
    isTemplate?: boolean;
}

