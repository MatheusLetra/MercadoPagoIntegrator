export interface ICustomerFindAndCreateBody {
  email: string;
}

export interface ICustomerFindByEmailResponse {
  paging: {
    limit: number
    offset: number
    total: number
  }
  results: {
    address: {
      id: string
      street_name: string
      zip_code: string
    }
    addresses: []
    cards: []
    date_created: string
    date_last_updated: string
    default_address: string
    default_card: number
    email: string
    first_name: string
    id: string
    identification: {
      number: string
      type: string
    }
    last_name: string
    live_mode: boolean
    metadata: {}
    phone: {
      area_code: string
      number: string
    }
  }[]
}
export interface ICustomerCreateResponse {
  id: string
  email: string
  first_name: string
  last_name: string
  phone: {
    area_code: number
    number: number
  }
  identification: {
    type: string
    number: number
  }
  address: {
    id: string
    zip_code: string
    street_name: string
  }
  description: string
  date_created: string
  metadata: {
    source_sync: string
  }
  default_address: string
  cards: {}[]
  addresses: {}[]
  live_mode: boolean
}


