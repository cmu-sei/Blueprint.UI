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
import { CultureInfo } from './cultureInfo';
import { IContainer } from './iContainer';
import { ISite } from './iSite';
import { SchemaSerializationMode } from './schemaSerializationMode';


export interface DataSet { 
    container?: IContainer;
    readonly designMode?: boolean;
    remotingFormat?: SerializationFormat;
    schemaSerializationMode?: SchemaSerializationMode;
    caseSensitive?: boolean;
    readonly defaultViewManager?: Array<object> | null;
    enforceConstraints?: boolean;
    dataSetName?: string | null;
    namespace?: string | null;
    prefix?: string | null;
    readonly extendedProperties?: { [key: string]: object; } | null;
    readonly hasErrors?: boolean;
    readonly isInitialized?: boolean;
    locale?: CultureInfo;
    site?: ISite;
    readonly relations?: Array<object> | null;
    readonly tables?: Array<object> | null;
}

