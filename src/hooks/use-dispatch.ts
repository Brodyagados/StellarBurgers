import { useDispatch as dispatchHook } from 'react-redux';
import { AppDispatch } from '../services';

export const useDispatch = () => dispatchHook<AppDispatch>();
