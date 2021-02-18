import Vconsole from 'vconsole'
const vConsole = process.env.VUE_BUILD_ENV !== 'prod' ? new Vconsole() : null
export default vConsole
