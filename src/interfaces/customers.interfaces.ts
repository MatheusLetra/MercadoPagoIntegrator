export interface ICustomerCreateBody {
  email: string;
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


