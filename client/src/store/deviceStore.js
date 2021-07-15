import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'холодильники'},
      {id: 2, name: 'смартфоны'},
      {id: 3, name: 'ноутбуки'}
    ]
    this._brands = [
      {id: 4, name: 'samsing'},
      {id: 5, name: 'apple'}
    ]
    this._devices = [
      {id: 6, name: 'd1', price: 100, rating: 5},
      {id: 7, name: 'd2', price: 100, rating: 5},
      {id: 8, name: 'agsadgag', price: 1510, rating: 2, img: 'http://localhost:5000/9b8bae7e-60b2-42e0-8062-c086f19ac7e9.jpg'},

    ]
    this._selectedType = {}
    this._selectedBrand = {}
    this._selectedDevice = {}
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }
  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }
  setSelectedDevice(device) {
    this._selectedDevice = device
  }


  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
  get selectedDevice() {
    return this._selectedDevice
  }

}
