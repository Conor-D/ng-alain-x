import { MockRequest } from "@delon/mock";

function getLanes(query) {
  return [
    { name: 'G101', pos: 1, realPlate: '粤A1234561', discernPlate: '粤A1234561', step: 1},
    { name: 'G102', pos: 2, realPlate: '粤A1234562', discernPlate: '粤A1234562', step: 4},
    { name: 'G103', pos: 1, realPlate: '粤A1234563', discernPlate: '粤A1234563', step: 2, enable: false},
    { name: 'G104', pos: 2, realPlate: '粤A1234564', discernPlate: '粤A1234564', step: 3},
    { name: 'G105', pos: 1, realPlate: '粤A1234565', discernPlate: '粤A1234565', step: 2},
    { name: 'G106', pos: 1, realPlate: '粤A1234566', discernPlate: '粤A1234566', step: 5}
  ]
}

export const LANES = {
  '/lanes': (req: MockRequest) => getLanes(req.queryString)
}