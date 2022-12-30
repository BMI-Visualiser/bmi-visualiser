export default function roundDecimal (num: number, decimal?: number): number {
  decimal = (!decimal) || decimal < 2 ? 2 : decimal
  const root = Math.pow(10, decimal)
  return Math.round(num * root) / root
}
