import { useContext, useState } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    {
      value: 'Rango de precio (any)',
    },
    {
      value: '100000000 - 130000000'
    },
    {
      value: '130000000 - 160000000'
    },
    {
      value: '160000000 - 190000000'
    },
    {
      value: '190000000 - 230000000'
    }
  ]

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button 
        className='dropdown-btn w-full text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiWallet3Line className='dropdown-icon-primary'/>
        <div className='text-[15px] font-medium leading-tight'>
          <div className='text-[13px]'>{price}</div>
          <div>Seleccioná el rango</div>
        </div>
          {
            isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-secondary'/>
            ) : (
              <RiArrowDownSLine className='dropdown-icon-secondary'/>
            )
          }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price,index)=>{
          return (
            <Menu.Item 
              onClick={() => setPrice(price.value)}
              className='cursor-pointer 
              hover:text-violet-700 transition'
              as='li'
              key={index}>
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>

    </Menu>
  );
};

export default PriceRangeDropdown;