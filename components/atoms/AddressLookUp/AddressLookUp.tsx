import { ButtonAppearance, ButtonColors } from '_types/CMS'
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IconNames } from '_types/local'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './AddressLookUp.module.scss'
import debounce from 'lodash/debounce'
import Icon from '../Icon/Icon'
import PopUp from '_hoc/PopUp/PopUp'
import Papa from 'papaparse'
import { useRouter } from 'next/router'

import {
  PostcodeService,
  toggleModal,
  ModalState,
  formatSearchPostcode,
  setPostcodeInLocalStorage,
  getPostcodeFromLocalStorage,
} from '_utils'

export interface AddressLookUpProps {
  isPostcodeForm?: boolean
  placeholder: string
  onInvalid?: (err: boolean) => void
  id: string
  clearHandler?: () => void
  children?: React.ReactNode
  isIndexPage?: boolean
}

export interface LookUpState {
  inputValue: string
  isLoading: boolean
  isError: boolean
  popUpOpen: boolean
  showMap: boolean
}

export type SinglePostCode = [string, string]

const AddressLookUp = ({
  isPostcodeForm = false,
  clearHandler,
  placeholder,
  onInvalid,
  children,
  id,
  isIndexPage,
  ...props
}: AddressLookUpProps) => {
  const router = useRouter()
  const postcodeInput = useRef<HTMLInputElement | null>(null)
  const DEBOUNCE_POSTCODE_KEYPRESS = 1500
  const [searchPlaceholder, setSearchPlaceholder] = useState(placeholder)
  const url = process.env.NEXT_PUBLIC_POSTCODE_URL

  const [inputState, setState] = useState<LookUpState>({
    popUpOpen: false,
    isLoading: false,
    isError: false,
    inputValue: '',
    showMap: false,
  })

  const modalAnim = {
    out: {
      y: '20%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    in: {
      opacity: 1,
      y: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
        delay: 0.25,
      },
    },
  }

  const moveUpAnim = {
    start: {
      y: '20%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    middle: {
      opacity: 1,
      y: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    end: {
      opacity: 0,
      y: '-20%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
  }

  const moveSideAnim = {
    start: {
      x: '50%',
      opacity: 0,
      transition: {
        txpe: 'tween',
        duration: 0.25,
      },
    },
    middle: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    end: {
      opacity: 0,
      x: '-50%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
  }

  const handleReset = (closeModal?: boolean) => {
    clearHandler?.()

    onInvalid?.(false)
    if (postcodeInput && postcodeInput.current) {
      postcodeInput.current.value = ''
    }

    setState((prevState) => {
      return {
        ...prevState,
        ...(closeModal && { popUpOpen: false }),
        isLoading: false,
        inputValue: '',
        isError: false,
        showMap: false,
      }
    })
  }

  const handlePostcode = async (postcode: string) => {
    const searchPostcode = formatSearchPostcode(postcode)

    if (PostcodeService.validatePostcode(searchPostcode)) {
      onInvalid?.(false)
      setState((prevState) => {
        return {
          ...prevState,
          // Don't show loading state for isPostcodeForm
          isLoading: isPostcodeForm ? false : true,
          inputValue: searchPostcode,
          isError: false,
        }
      })

      if (postcodeInput && postcodeInput.current) {
        postcodeInput.current.blur()
      }
      setSearchPlaceholder(searchPostcode)
      setPostcodeInLocalStorage(searchPostcode)
      getCsvFile(searchPostcode)
    } else {
      onInvalid?.(true)
      setState((prevState) => {
        return { ...prevState, isLoading: false, isError: true }
      })
    }
  }

  const handleInputChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const postcode = (e.target as HTMLInputElement).value
      if (postcode === '') {
        handleReset()
      } else if (postcode.length > 3) {
        handlePostcode(postcode)
      }
    },
    DEBOUNCE_POSTCODE_KEYPRESS
  )

  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const postcode = (e.target as HTMLInputElement).value
    if (e.key === 'Enter' && postcode !== '' && postcode.length > 3) {
      e.preventDefault()
      handlePostcode(postcode)
    } else if (e.key === 'Escape') {
      e.preventDefault()
      handleReset()
    }
  }

  const handleFocusSearch = debounce(
    (elm: React.RefObject<HTMLInputElement>) => {
      if (elm && elm.current) {
        elm.current.focus()
      }
    },
    100
  )

  useEffect(() => {
    return () => {
      setState((prevState) => prevState) // This worked for me
    }
  })

  useEffect(() => {
    if (!isIndexPage) {
      const rldPostcode = getPostcodeFromLocalStorage()
      if (rldPostcode) {
        setSearchPlaceholder(rldPostcode.postcode)
      }
    }
  }, [isIndexPage])

  const getCsvFile = (postcode: string) => {
    Papa.parse<SinglePostCode>(
      url as string,

      {
        download: true,
        complete: (results) => {
          findPostCode(results.data, postcode)
        },
      }
    )
  }

  const findPostCode = (array: SinglePostCode[], postcode: string) => {
    const filteredPostCodes = array.filter(
      (val) => val[0] === postcode && val[1].toLowerCase() !== 'unknown'
    )

    if (filteredPostCodes.length > 1) {
      let blocks = filteredPostCodes
        .sort()
        .reduce((blocks, postcode, index, arr) => {
          if (index !== arr.length - 1) {
            return blocks + postcode?.[1].toLowerCase() + '-'
          } else {
            return blocks + postcode?.[1].toLowerCase()
          }
        }, '')
      router.push(`/schedule/${blocks}`)
    } else {
      const postCodeInArray = filteredPostCodes.find(
        (val) => val[0] === postcode
      )
      if (postCodeInArray) {
        const block = postCodeInArray?.[1].toLowerCase()
        router.push(`/schedule/${block}`)
      } else {
        router.push('/not-covered')
      }
    }

    handlePopUp(false)
  }

  const handleAccKeyEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handlePopUp(true)
    }
  }

  const handlePopUp = (
    state: boolean,
    e?: React.FocusEvent<HTMLInputElement>
  ) => {
    if (!!e) {
      e.target?.blur()
    }
    document.body.style.overflow = state ? 'hidden' : 'auto'
    toggleModal(state ? ModalState.OPEN : ModalState.CLOSE)

    state ? handleFocusSearch(postcodeInput) : null

    setState((prevState) => ({
      ...prevState,
      popUpOpen: state,
      isLoading: false,
      showMap: false,
      isError: false,
    }))
  }

  return (
    <>
      <div
        className={styles.addressSearchBar}
        tabIndex={0}
        onKeyDown={handleAccKeyEnter}
      >
        <input
          aria-controls="postcode-search_open"
          aria-expanded={inputState.popUpOpen}
          onFocus={(e) => handlePopUp(true, e)}
          aria-owns="postcode-search_open"
          placeholder={searchPlaceholder}
          aria-labelledby={id}
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          role="combobox"
          type="text"
          {...props}
          id={id}
          tabIndex={-1}
        />
        <Button
          appearance={ButtonAppearance.PRIMARY}
          onClick={(e) => handlePopUp(true)}
          className={styles.lensButton}
          aria-label="search"
          type="button"
          tabIndex={-1}
        >
          <Icon name={IconNames.SIXTEEN_PX_SEARCH} />
        </Button>
      </div>
      <PopUp
        classModal={styles.addressPopUpModal}
        shouldShow={inputState.popUpOpen}
        aria-label="Address search"
        animation={modalAnim}
        initial="out"
        animate="in"
        exit="out"
        focusTrap
      >
        <div className={styles.modalControls}>
          <Button
            appearance={ButtonAppearance.TERTIARY}
            color={ButtonColors.DARK}
            onClick={(e) => handlePopUp(false)}
            className={styles.closeModal}
            aria-label="close"
            type="button"
          >
            <Icon name={IconNames.SIXTEEN_PX_CLOSE} />
          </Button>
        </div>
        {/* INPUT FIELDS */}
        {!inputState.showMap && (
          <motion.div
            className={styles.inputField}
            variants={moveSideAnim}
            key="input-field"
          >
            <Button
              onClick={() => handleFocusSearch(postcodeInput)}
              appearance={ButtonAppearance.BLANK}
              className={styles.searchButton}
              aria-label="search"
              type="button"
              tabIndex={0}
            >
              <Icon name={IconNames.SIXTEEN_PX_SEARCH} baseColour />
            </Button>
            <input
              onChange={(e) => handleInputChange(e)}
              onKeyDown={(e) => handleKeyEnter(e)}
              placeholder={placeholder}
              aria-labelledby={id}
              ref={postcodeInput}
              autoFocus
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
              type="text"
              {...props}
            />
            <Button
              appearance={ButtonAppearance.BLANK}
              className={styles.closeButton}
              onClick={() => handleReset()}
              aria-label="reset search"
              type="button"
            >
              <Icon name={IconNames.SIXTEEN_PX_CLEAR} baseColour />
            </Button>
          </motion.div>
        )}
        {/* LOADING STATE */}
        {inputState.isLoading && (
          <motion.p
            aria-valuetext="Searching for shcedule"
            className={styles.loader}
            variants={moveUpAnim}
            role="progressbar"
            aria-busy="true"
            animate="middle"
            initial="start"
            key="loader"
            exit="end"
          >
            Searching for schedule
            <span>.</span>
          </motion.p>
        )}
        {inputState.isError && (
          <motion.p
            aria-valuetext="Not valid postcode"
            className={styles.errorMessage}
            variants={moveUpAnim}
            role="progressbar"
            aria-busy="true"
            aria-label="Address error"
            animate="middle"
            initial="start"
            key="invalidPostcode"
            exit="end"
          >
            Please enter a full, valid postcode
          </motion.p>
        )}
      </PopUp>
    </>
  )
}

export default AddressLookUp
