import { Loader2 } from 'lucide-react'
import React from 'react'

type Props = {}

function Loading({ }: Props) {
    return (
        <div className='flex gap-1 text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Loader2 className='w-8 h-8 animate-spin' />
            loading
        </div>
    )
}

export default Loading