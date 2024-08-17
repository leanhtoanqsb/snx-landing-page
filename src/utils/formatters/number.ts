import BigNumber from 'bignumber.js';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { CurrencyKey } from '@/constants/currency';
import {
  DEFAULT_DATE_FORMAT,
  DEFAULT_FIAT_DECIMALS,
  DEFAULT_NUMBER_DECIMALS,
  DEFAULT_TOKEN_DECIMALS,
} from '@/constants/defaults';

dayjs.extend(utc);

BigNumber.config({ DECIMAL_PLACES: DEFAULT_TOKEN_DECIMALS });

export type NumericValue = BigNumber | string | number;

export type FormatNumberOptions = {
  minDecimals?: number;
  maxDecimals?: number;
  prefix?: string;
  suffix?: string;
};

export type FormatCurrencyOptions = {
  minDecimals?: number;
  maxDecimals?: number;
  sign?: string;
  currencyKey?: CurrencyKey;
};

export const toBigNumber = (value: NumericValue) => new BigNumber(value);

// TODO: implement max decimals
export const formatNumber = (
  value: NumericValue | undefined,
  options?: FormatNumberOptions
) => {
  if (value == null) return '--';
  const prefix = options?.prefix;
  const suffix = options?.suffix;

  const formattedValue = [];
  if (prefix) {
    formattedValue.push(prefix);
  }

  formattedValue.push(
    toBigNumber(value).toFormat(options?.minDecimals ?? DEFAULT_NUMBER_DECIMALS)
  );
  if (suffix) {
    formattedValue.push(` ${suffix}`);
  }

  return formattedValue.join('');
};

export const formatFiatCurrency = (
  value: NumericValue,
  options?: FormatCurrencyOptions
) =>
  formatNumber(value, {
    prefix: options?.sign,
    suffix: options?.currencyKey,
    minDecimals: options?.minDecimals ?? DEFAULT_FIAT_DECIMALS,
    maxDecimals: options?.maxDecimals,
  });

export const formatPercent = (
  value: NumericValue,
  options?: { minDecimals: number }
) => {
  const decimals = options?.minDecimals ?? 2;

  return `${toBigNumber(value).multipliedBy(100).toFixed(decimals)}%`;
};

export function numberWithCommas(value: string, decimals?: number) {
  const parts = value.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const joinedParts = parts.join('.');
  return decimals
    ? joinedParts.substring(0, joinedParts.indexOf('.') + decimals)
    : joinedParts;
}

export const formatLocalDate = (
  date: string | number | undefined,
  format?: string
) => {
  if (!date) return '';

  return dayjs
    .utc(date)
    .local()
    .format(format ?? DEFAULT_DATE_FORMAT);
};

export const formatDate = (
  date: string | number | undefined,
  format?: string
) => {
  if (!date) return '';

  return dayjs.utc(date).format(format ?? DEFAULT_DATE_FORMAT);
};

export function compactNumber({
  num,
  digits = 0,
  isInteger = false,
  prefix = '',
  suffix = '',
}: {
  num: number;
  digits?: number;
  isInteger?: boolean;
  prefix?: string;
  suffix?: string;
}) {
  if (num === 0) return 0;

  if (isInteger && num > 0 && num < 1000) return num;

  if (Math.abs(num) < 1) return num.toFixed(digits);
  const lookup = [
    { value: 1e18, symbol: 'E' },
    { value: 1e15, symbol: 'P' },
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'B' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'K' },
    { value: 1, symbol: '' },
  ];
  const item = lookup.find(function (item) {
    return Math.abs(num) >= item.value;
  });
  return item
    ? prefix +
        (num / item.value).toFixed(digits) +
        item.symbol +
        (suffix ? ` ${suffix}` : '')
    : '--';
}
