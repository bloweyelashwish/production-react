import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first paramater', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const expectedClass = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
      expectedClass,
    );
  });

  test('with mods', () => {
    const expectedClass = 'someClass class1 class2 hovered scrollable';
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe(expectedClass);
  });

  test('with one of the mods set to false', () => {
    const expectedClass = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, [
        'class1',
        'class2',
      ]),
    ).toBe(expectedClass);
  });

  test('with one of the mods set to undefined', () => {
    const expectedClass = 'someClass class1 class2 scrollable';
    expect(
      classNames('someClass', { hovered: undefined, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe(expectedClass);
  });
});
