import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Product',
    path: '/product',
    icon: <BiIcons.BiCategoryAlt />,
    cName: 'nav-text'
  },
  {
    title: 'CategoryList',
    path: '/categorlist',
    icon: <BiIcons.BiCategoryAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Customer',
    path: '/customer',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'CustomerList',
    path: '/customerlist',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Supplier',
    path: '/supplier',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'SupplierList',
    path: '/supplierlist',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'WareHouse',
    path: '/warehouse',
    icon: <BiIcons.BiCategoryAlt />,
    cName: 'nav-text'
  },
  {
    title: 'WHouseList',
    path: '/whouselist',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  
   {
      title: 'PromoCode',
      path: '/promocode',
      // icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },
    {
      title: 'PromoCodeList',
      path: '/promocodelist',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },
    {
      title: 'Roles',
      path: '/roles',
      // icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },
    {
      title: 'Roleslist',
      path: '/roleslist',
      // icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    }
  
]
 