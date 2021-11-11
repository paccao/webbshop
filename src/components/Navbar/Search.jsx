import { BsSearch } from "react-icons/bs"
import styled from "styled-components"

function Search() {
  return (
    <InputFieldWrapper>
      <li>
        <input className="searchInput" type="text" />
        <BsSearch />
      </li>
    </InputFieldWrapper>
  )
}

const InputFieldWrapper = styled.div`
  .searchInput {
    background-color: green;
  }
`

export default Search
