import FocusTrap from 'focus-trap-react'
import { motion, AnimatePresence, Variants, MotionProps } from 'framer-motion'
import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import styles from './PopUp.module.scss'

export interface PopUpProps extends MotionProps {
  children: React.ReactNode | JSX.Element
  shouldShow: boolean
  animation: Variants
  classModal: string
  focusTrap?: boolean
}

// AnimatePresence not working with React 18

const PopUp = ({
  shouldShow,
  classModal,
  animation,
  children,
  focusTrap,
  ...props
}: PopUpProps) => {
  return (
    <>
      {!!shouldShow && (
        <motion.div
          className={styles.popUp}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ConditionalWrapper
            condition={focusTrap as boolean}
            wrapper={(children) => (
              <FocusTrap
                active={shouldShow}
                focusTrapOptions={{
                  escapeDeactivates: false,
                  initialFocus: false,
                  tabbableOptions: {
                    displayCheck: 'none',
                  },
                }}
              >
                {children}
              </FocusTrap>
            )}
          >
            <motion.div
              className={classModal}
              variants={animation}
              role="dialog"
              key="modal"
              {...props}
            >
              {children}
            </motion.div>
          </ConditionalWrapper>
        </motion.div>
      )}
    </>
  )
}

export default PopUp
