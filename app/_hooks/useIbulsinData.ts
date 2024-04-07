import { useRecoilValue } from 'recoil'
import {
  outlineTextareaAtom,
  whyTextareaAtom,
  marketResponseTextareaAtom,
  XYZTextareaAtom,
  xyzTextareaAtom,
  pretotypingTextareaAtom,
} from '@/app/_store/ibulsin/textarea'

function useIbulsinData() {
  const outlineValue = useRecoilValue(outlineTextareaAtom)
  const whyTextValue = useRecoilValue(whyTextareaAtom)
  const marketResponseValue = useRecoilValue(marketResponseTextareaAtom)
  const XYZValue = useRecoilValue(XYZTextareaAtom)
  const xyzValue = useRecoilValue(xyzTextareaAtom)
  const pretotypingValue = useRecoilValue(pretotypingTextareaAtom)

  return {
    outlineValue,
    whyTextValue,
    marketResponseValue,
    XYZValue,
    xyzValue,
    pretotypingValue,
  }
}

export default useIbulsinData
