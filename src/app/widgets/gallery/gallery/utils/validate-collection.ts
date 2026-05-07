import { IVirtualListCollection, IVirtualListItem } from 'ng-virtual-list';
import { IGalleryImageData } from "@shared/models/pages";

/**
 * @author Evgenii Alexandrovich Grebennikov
 * @email djonnyx@gmail.com
 * @license Copyright (c) 2026 Evgenii Alexandrovich Grebennikov (djonnyx@gmail.com tg: http://t.me/djonnyx).
 */
export const validateCollection = (collection: IVirtualListCollection<IGalleryImageData>): boolean => {
    // нужно написать валидацию

    return true;
}

/**
 * @author Evgenii Alexandrovich Grebennikov
 * @email djonnyx@gmail.com
 * @license Copyright (c) 2026 Evgenii Alexandrovich Grebennikov (djonnyx@gmail.com tg: http://t.me/djonnyx).
 */
export const validateMessage = (collection: IVirtualListItem<IGalleryImageData>): boolean => {
    // нужно написать валидацию

    return true;
}