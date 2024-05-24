import React from 'react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'

const SearchMotor = () => {
  return (
    <>
      <div className="flex space-x-2">
        <Select>
          <SelectTrigger className="h-auto max-w-lg" id="select-branch">
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          {/* TODO Get List Branch */}
          <SelectContent>
            <SelectItem value="scooter">Kalasan</SelectItem>
            <SelectItem value="motorcycle">Berbah</SelectItem>
            <SelectItem value="moped">Kotagede</SelectItem>
          </SelectContent>
        </Select>
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
      </div>
    </>
  )
}

export default SearchMotor