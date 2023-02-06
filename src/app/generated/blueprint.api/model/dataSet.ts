/*
Copyright 2022 Carnegie Mellon University. All Rights Reserved. 
 Released under a MIT (SEI)-style license. See LICENSE.md in the
// project root for license information.
*/

/**
 * Blueprint API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CultureInfo } from './cultureInfo';
import { IContainer } from './iContainer';
import { ISite } from './iSite';
import { SchemaSerializationMode } from './schemaSerializationMode';
import { SerializationFormat } from './serializationFormat';


export interface DataSet { 
    container?: IContainer;
    readonly designMode?: boolean;
    remotingFormat?: SerializationFormat;
    schemaSerializationMode?: SchemaSerializationMode;
    caseSensitive?: boolean;
    readonly defaultViewManager?: Array<any>;
    enforceConstraints?: boolean;
    dataSetName?: string;
    namespace?: string;
    prefix?: string;
    readonly extendedProperties?: { [key: string]: any; };
    readonly hasErrors?: boolean;
    readonly isInitialized?: boolean;
    locale?: CultureInfo;
    site?: ISite;
    readonly relations?: Array<any>;
    readonly tables?: Array<any>;
}
