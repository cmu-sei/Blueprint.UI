/*
Copyright 2022 Carnegie Mellon University. All Rights Reserved. 
 Released under a MIT (SEI)-style license. See LICENSE.md in the project root for license information.
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
import { Calendar } from './calendar';
import { CalendarWeekRule } from './calendarWeekRule';
import { DayOfWeek } from './dayOfWeek';


export interface DateTimeFormatInfo { 
    amDesignator?: string;
    calendar?: Calendar;
    dateSeparator?: string;
    firstDayOfWeek?: DayOfWeek;
    calendarWeekRule?: CalendarWeekRule;
    fullDateTimePattern?: string;
    longDatePattern?: string;
    longTimePattern?: string;
    monthDayPattern?: string;
    pmDesignator?: string;
    readonly rfC1123Pattern?: string;
    shortDatePattern?: string;
    shortTimePattern?: string;
    readonly sortableDateTimePattern?: string;
    timeSeparator?: string;
    readonly universalSortableDateTimePattern?: string;
    yearMonthPattern?: string;
    abbreviatedDayNames?: Array<string>;
    shortestDayNames?: Array<string>;
    dayNames?: Array<string>;
    abbreviatedMonthNames?: Array<string>;
    monthNames?: Array<string>;
    readonly isReadOnly?: boolean;
    readonly nativeCalendarName?: string;
    abbreviatedMonthGenitiveNames?: Array<string>;
    monthGenitiveNames?: Array<string>;
}
