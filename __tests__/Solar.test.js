var {Solar} = require('../lunar');

test('test', () => {
  var solar = Solar.fromYmd(2021,7,31);
  expect(solar.toFullString()).toBe('2021-07-31 星期六');
  expect(solar.getLunar().toFullString()).toBe('二〇二一年六月廿二 星期六 辛丑(牛)年');

  // 百日
  var hund_date = Solar.fromDate(new Date(new Date().setDate(new Date(solar).getDate() + 100)));
  expect(hund_date.toFullString()).toBe('2021-11-08 星期一');
  // 百日農曆
  expect(hund_date.getLunar().toFullString()).toBe('二〇二一年十月初四 星期一 辛丑(牛)年');
  // 對年
  var next_year = Solar.fromDate(new Date(new Date(solar).setFullYear(new Date(solar).getFullYear() + 1)));
  expect(next_year.toFullString()).toBe('2022-07-31 星期日');
  // 對年農曆
  expect(next_year.getLunar().toFullString()).toBe('二〇二二年七月初三 星期日 壬寅(虎)年');
});

