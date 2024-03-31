// state.ts
import { atom } from 'recoil';

export const counterState = atom({
    key: 'counterState', // уникальный ID (с учетом всего приложения)
    default: 0, // значение по умолчанию (aka начальное значение)
});
