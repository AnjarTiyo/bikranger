import React from 'react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'

const SearchMotor = () => {
  return (
    <>
      <form className="flex space-x-2">
        <Input className="max-w-lg flex-1 w-[30%]" placeholder="Search by location" type="text" id="input-location" />
        <Input className="max-w-lg" placeholder="Pick a date" type="date" id="input-date" />
        <Select>
          <SelectTrigger className="h-auto" id="input-type">
            <SelectValue placeholder="Bike type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="scooter">Scooter</SelectItem>
            <SelectItem value="motorcycle">Motorcycle</SelectItem>
            <SelectItem value="moped">Moped</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">Search</Button>
      </form>
    </>
  )
}

export default SearchMotor