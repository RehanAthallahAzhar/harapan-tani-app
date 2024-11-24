import { useEffect, useState } from 'react'
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationLabel,
  BottomNavigationIcon,
} from 'chakra-ui-bottom-navigation'
import { BiHomeAlt2, BiSearchAlt, BiHistory } from 'react-icons/bi'
import { CgLogIn, CgProfile } from 'react-icons/cg'

export const Navigation = ({ handleChange }) => {
  const [index, setIndex] = useState('/')

  useEffect(() => {
    setIndex(window.location.pathname)
  }, [])

  return (
    <BottomNavigation
      width="sm"
      margin={'0 auto'}
      value={index}
      onChange={(newIndex) => {
        setIndex(newIndex)
        handleChange(newIndex)
      }}
      showLabel="if-active"
    >
      <BottomNavigationItem value="/">
        <BottomNavigationIcon as={BiHomeAlt2} />
        <BottomNavigationLabel>Home</BottomNavigationLabel>
      </BottomNavigationItem>

      <BottomNavigationItem value="/franchise">
        <BottomNavigationIcon as={BiSearchAlt} />
        <BottomNavigationLabel>Search</BottomNavigationLabel>
      </BottomNavigationItem>

      <BottomNavigationItem value="/history">
        <BottomNavigationIcon as={BiHistory} />
        <BottomNavigationLabel>History</BottomNavigationLabel>
      </BottomNavigationItem>
      {
        // check token
        // if token exist, show profile
        // else, show login and register
        localStorage.getItem('token') ? (
          <BottomNavigationItem value="/profile">
            <BottomNavigationIcon as={CgProfile} />
            <BottomNavigationLabel>Profile</BottomNavigationLabel>
          </BottomNavigationItem>
        ) : (
          <BottomNavigationItem value="/login">
            <BottomNavigationIcon as={CgLogIn} />
            <BottomNavigationLabel>Login</BottomNavigationLabel>
          </BottomNavigationItem>
        )
      }
    </BottomNavigation>
  )
}
