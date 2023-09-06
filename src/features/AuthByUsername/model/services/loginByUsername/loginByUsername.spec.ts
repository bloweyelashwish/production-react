import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { Dispatch } from 'react';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success login', async () => {
    const userResult = { username: 'test', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userResult }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userResult));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userResult);

    // mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    // const action = loginByUsername({ username: '123', password: '123' });
    // const result = await action(dispatch, getState, undefined);

    // expect(dispatch).toBeCalledWith(userActions.setAuthData(userData));
    // expect(dispatch).toHaveBeenCalledTimes(3);
    // expect(mockedAxios.post).toHaveBeenCalled();
    // expect(result.meta.requestStatus).toBe('fulfilled');
    // expect(result.payload).toBe(userData);
  });

  test('failed login', async () => {
    mockedAxios.post.mockReturnValue(Promise.reject('Failed to login'));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Failed to login');

    // mockedAxios.post.mockReturnValue(Promise.reject({ data: userData }));

    // const action = loginByUsername({ username: '123', password: '123' });
    // const result = await action(dispatch, getState, undefined);

    // expect(dispatch).toHaveBeenCalledTimes(2);
    // expect(mockedAxios.post).toHaveBeenCalled();
    // expect(result.meta.requestStatus).toBe('rejected');
    // expect(result.payload).toBe('Failed to login');
  });
});
