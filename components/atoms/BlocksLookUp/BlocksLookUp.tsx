import { ButtonAppearance, ButtonColors, LinkAppearance } from '_types/CMS'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IconNames } from '_types/local'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './BlocksLookUp.module.scss'
import Icon from '../Icon/Icon'
import { toggleModal, ModalState, removePostcodeFromLocalStorage } from '_utils'
import PopUp from '_hoc/PopUp/PopUp'
import Link from '_atoms/Button&Link/Link/Link'
import { dataBlocks } from './data'

export interface BlocksLookUpProps {
  title: string
  buttonText: string
  onInvalid?: (err: boolean) => void
  id: string
  clearHandler?: () => void
  children?: React.ReactNode
}

export interface LookUpState {
  inputValue: string
  isLoading: boolean
  isError: boolean
  popUpOpen: boolean
  showMap: boolean
}

const BlocksLookUp = ({
  clearHandler,
  title,
  buttonText,
  onInvalid,
  children,
  id,
  ...props
}: BlocksLookUpProps) => {
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

  useEffect(() => {
    return () => {
      setState((prevState) => prevState) // This worked for me
    }
  })

  const handlePopUp = (
    state: boolean,
    e?: React.FocusEvent<HTMLInputElement>
  ) => {
    if (!!e) {
      e.target?.blur()
    }
    document.body.style.overflow = state ? 'hidden' : 'auto'
    toggleModal(state ? ModalState.OPEN : ModalState.CLOSE)

    setState((prevState) => ({
      ...prevState,
      popUpOpen: state,
      isLoading: false,
      showMap: false,
    }))
  }

  return (
    <>
      <div className={styles.addressSearchBar}>
        <Button
          appearance={ButtonAppearance.SECONDARY}
          color={ButtonColors.WHITE}
          onClick={(e) => handlePopUp(true)}
          className={styles.mainButton}
          aria-label={buttonText}
        >
          {buttonText}
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
          <p className={styles.modalControlsHeader} tabIndex={1}>
            {title}
          </p>
          <Button
            appearance={ButtonAppearance.TERTIARY}
            color={ButtonColors.DARK}
            onClick={(e) => handlePopUp(false)}
            className={styles.closeModal}
            aria-label="close"
            type="button"
            tabIndex={3}
          >
            <Icon name={IconNames.SIXTEEN_PX_CLOSE} />
          </Button>
        </div>
        {/* BLOCKS */}
        {!inputState.showMap && (
          <motion.div
            className={styles.blockListPopUp}
            variants={moveSideAnim}
            key="blocks-field"
          >
            <ul className={styles.blockListContainer}>
              {dataBlocks?.map((block) => (
                <li
                  key={block.id}
                  className={styles.blockContainer}
                  onClick={removePostcodeFromLocalStorage}
                >
                  <Link
                    url={block.link}
                    appearance={LinkAppearance.TERTIARY}
                    color={ButtonColors.DARK}
                    className={styles.blockLink}
                    tabIndex={2}
                  >
                    {block.name}
                    <Icon
                      name={IconNames.SIXTEEN_PX_CHEVRON_RIGHT_ORANGE}
                      baseColour
                      className={styles.blockChevronRight}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </PopUp>
    </>
  )
}

export default BlocksLookUp
