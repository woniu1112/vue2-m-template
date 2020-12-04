import { getData } from '@/config/requestData'

/**
 * test
 */
export const getImgCode = (data) => getData('test/test', data, 'get', 'blob')
