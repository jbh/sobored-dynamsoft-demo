import { Pipe, PipeTransform } from '@angular/core';

/**
 * Zero Pad a number
 * Takes a width argument for width of number
 * Takes a pad option for pad character
 *
 * Usage:
 *   value | ellipsis:15
 * Example:
 *   {{ 'hello world' | ellipsis:6 }}
 *   formats to: 'hello...'
 *
 */
@Pipe({name: 'zeropad'})
export class ZeropadPipe implements PipeTransform {

  transform(value: number, width: number, pad: string): string {
    pad = pad || '0';
    const stringValue = value + '';

    return stringValue.length >= width ? stringValue : new Array(width - stringValue.length + 1).join(pad) + stringValue;
  }

}
