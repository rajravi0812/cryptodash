
import React from 'react'
import { Bar, BarChart, CartesianGrid,Tooltip, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export default function Barcharts() {
    const data03 = [
        {
            'coin':'Solana',
            'value': 600,
            'last':800,
            
        },
        {
            'coin':'Ethereum',
            'value': 1060,
            'last':1220,
        },
        {
            'coin':'Tether',
            'value': 1200,
            'last':1400,
        },
        {
            'coin':'Pi',
            'value': 2000,
            'last':2200,
        },
        {
            'coin':'Polygon',
            'value': 1000,
            'last':2000,
        },
        {
            'coin':'Bitcoin',
            'value': 3400,
            'last':3000,
        }
    ]
  return (
    <div className='mt-2'>
      <ResponsiveContainer height={250} width='93%'>
        <BarChart data={data03} margin={{bottom:10}}>
            <CartesianGrid strokeDasharray="3 1" vertical={false}/>
            <XAxis dataKey="coin" axisLine={false}/>
            <YAxis axisLine={false}/>
            <Tooltip/>
            <Legend iconSize={12} iconType='radio' verticalAlign='top' align='right' wrapperStyle={{top:-15}}/>
            <Bar dataKey="value" fill="#8884d8" barSize={12}/>
            <Bar dataKey="last"  fill="#82ca9d" barSize={12}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
