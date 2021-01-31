import * as React from 'react'
import { useEffect, memo } from 'react'
import Prism from 'prismjs'

const Code = () => {
  const code = `
<CodeContainer>
  <CodeAvatar>
    <AnimatePresence>
      {showAvatar && (
        <Avatar
          src="/images/avatar-demo.png"
          alt="avatar"
          initial={{ y: 170, x: '-50%' }}
          animate={{ y: 0 }}
          exit={{ y: 170 }}
          transition={{ type: 'spring', damping: 16 }}
        />
      )}
    </AnimatePresence>
  </CodeAvatar>
  <Button
    whileHover={{ y: -1 }}
    whileTap={{ y: 1 }}
    onClick={() => setShowAvatar((prevState) => !prevState)}
  >
    {showAvatar ? 'Hide' : 'Show'} avatar
  </Button>
</CodeContainer>
`.trim()

  useEffect(() => {
    const idx = setTimeout(() => Prism.highlightAll(), 0)

    return () => clearTimeout(idx)
  }, [])

  return (
    <pre className="line-numbers">
      <code className="language-jsx">{code}</code>
    </pre>
  )
}

export default memo(Code)
