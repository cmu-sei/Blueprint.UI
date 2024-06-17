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
import { SerializationFormat } from './serializationFormat';
import { DataSet } from './dataSet';
import { DataColumn } from './dataColumn';
import { CultureInfo } from './cultureInfo';
import { IContainer } from './iContainer';
import { ISite } from './iSite';


export interface DataTable { 
    container?: IContainer;
    readonly designMode?: boolean;
    caseSensitive?: boolean;
    readonly isInitialized?: boolean;
    remotingFormat?: SerializationFormat;
    readonly childRelations?: Array<object> | null;
    readonly columns?: Array<object> | null;
    readonly constraints?: Array<object> | null;
    dataSet?: DataSet;
    readonly defaultView?: Array<object> | null;
    displayExpression?: string | null;
    readonly extendedProperties?: { [key: string]: object; } | null;
    readonly hasErrors?: boolean;
    locale?: CultureInfo;
    minimumCapacity?: number;
    readonly parentRelations?: Array<object> | null;
    primaryKey?: Array<DataColumn> | null;
    readonly rows?: Array<object> | null;
    tableName?: string | null;
    namespace?: string | null;
    prefix?: string | null;
    site?: ISite;
}

