<<<<<<< HEAD

=======
'use client';
>>>>>>> 011d601e4638ee1a54fba75e4da82433f7134ac2
import React, { useContext } from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight,  HiOutlineCloudUpload, HiShoppingBag,  } from 'react-icons/hi';
import logo from '../assets/Logo4.png'
import { AuthContext } from '../contects/AuthProviders';

const SideBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
        <Sidebar>
      <Sidebar.Logo href="/" img={user?.photoURL || logo} imgAlt="BookSwap logo" className='w-16 h-16'>
        <p>
          {
            user?.displayName || "Admin"
          }
        </p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiShoppingBag}>
            Manage Books
          </Sidebar.Item>
          
          <Sidebar.Item href="/logout" icon={HiArrowSmRight}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

    </div>
  )
}

export default SideBar
