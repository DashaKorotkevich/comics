import type { AppDispatch, RootState } from '@store';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

// Типизированные хуки вместо обычных useDispatch и useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Альтернатива - типизация в каждом хуке
// export const useAuth = () => {
//   const auth = useSelector((state: RootState) => state.auth);
//   const dispatch = useDispatch<AppDispatch>();
//   // ...
// };