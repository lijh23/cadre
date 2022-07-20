export const SERVER_URI = 'http://192.168.1.119:8089'
export const CONTEXT = '/yanan'
// 登陆
export const SYS_LOGIN = CONTEXT + '/sys/login'
// 用户注册
export const SYS_REGISTER = CONTEXT + '/sys/register'
// 注销
export const SYS_LOGOUT = CONTEXT + '/sys/logout'
// 获取验证码图片
export const SYS_VALIDCODE = SERVER_URI + CONTEXT + '/sys/registValidateCode'
// 检验验证码
export const SYS_CHECKVALIDCODE = SERVER_URI + CONTEXT + '/sys/checkRegistValidateCode/'

// 总览
export const DATA_OVERVIEW = CONTEXT + '/data/overview/'
// 数据检索
export const DATA_SEARCH = CONTEXT + '/data/search/list'

// 时空数据-栅格数据
export const SPACE_GRID = CONTEXT + '/space/grid/category'
export const SPACE_GRID_FILES = CONTEXT + '/space/grid/files'
export const SPACE_FILE_NUMBER = SPACE_GRID + '/filenum'
// 时空数据-矢量数据
export const SPACE_VECTOR = CONTEXT + '/space/vector/category'
export const SPACE_VECTOR_FILES = CONTEXT + '/space/vector/files'
// 时空数据-4D产品
export const SPACE_FOUR = CONTEXT + '/space/four/category'
export const SPACE_FOUR_FILES = CONTEXT + '/space/four/files'
// 时空数据-GIS符号库
export const SPACE_GIS = CONTEXT + '/space/gis/category'
export const SPACE_GIS_FILES = CONTEXT + '/space/gis/files'

// 业务数据-违建数据
export const BUSI_NONBUILD = CONTEXT + '/busi/nonbuild/category'
export const BUSI_NONBUILD_FILES = CONTEXT + '/busi/nonbuild/files'
// 业务数据-年鉴数据
export const BUSI_YEARBOOK = CONTEXT + '/busi/yearbook/category'
export const BUSI_YEARBOOK_FILES = CONTEXT + '/busi/yearbook/files'
export const READ_EXCEL = CONTEXT + '/readexcel/'
// 业务数据-政务文件
export const BUSI_GOVERNMENT = CONTEXT + '/busi/government/category'
export const BUSI_GOVERNMENT_FILES = CONTEXT + '/busi/government/files'
// 业务数据-外部接口
export const BUSI_INTERFACE = CONTEXT + '/busi/interface'
// 文件分块上传
export const FILE_CHUNK_UPLOADER = SERVER_URI + CONTEXT + '/data/fileChunkUpload/chunk'
// 文件合并
export const FILE_MERGE_UPLOADER = CONTEXT + '/data/fileChunkUpload/mergeFile'
// 下载文件-判断文件是否存在能否下载成功
export const FILE_DOWNLOAD = SERVER_URI + CONTEXT + '/data/fileChunkUpload/download/'
// 预览文件
export const FILE_DOWNLOAD_PREVIEW = SERVER_URI + CONTEXT + '/data/fileChunkUpload/readfile/'
// 下载文件
export const FILE_DOWNLOAD_FILE = SERVER_URI + CONTEXT + '/data/fileChunkUpload/downFileByPath/'
// 业务数据-城管部件
export const URBAN_COMPONENT_TYPE = CONTEXT + '/busi/component/type'
export const URBAN_COMPONENT = CONTEXT + '/busi/component'
// 业务数据-城管部件-POI
export const POI = CONTEXT + '/busi/geo/poi'
export const POI_KIND = POI + '/kind'
export const POI_PROVIDER = POI + '/provider'
// 业务数据-民政地名地址
export const GEO_ADDRESS = CONTEXT + '/busi/geo/address'
export const GEO_ADDRESS_STATE = GEO_ADDRESS + '/state'
export const GEO_ADDRESS_COUNTRY = GEO_ADDRESS + '/country'
// 业务数据-摄像头
export const BUSI_CAMERA = CONTEXT + '/busi/camera'

// 专题数据
// 专题数据-专题库管理
export const SUBJECT_CATEGORY = CONTEXT + '/data/subject/category'
// 专题数据-指标维护
export const DATA_INDEX = CONTEXT + '/data/subject/index'
// 专题数据-专题表-表结构表数据
export const SUBJECT_TABLE = CONTEXT + '/data/subject/table'

// 外部数据-hive基础数据维护
export const SUBJECT_DATABASE_SEARCH = CONTEXT + '/subject/database/table'
// 专题数据-外部数据-数据源管理
export const DATA_SOURCE = CONTEXT + '/data/source'
// 专题数据-外部数据-任务管理
export const DATA_JOB = CONTEXT + '/data/job'
// 专题数据-指标维护-指标数据预览（controller在business中）
export const DATA_INDEX_OPERATE = CONTEXT + '/index/'

// 系统管理-新用户审批（查询需要审批的用户/用户审批）（RegisterController）
export const SYS_USERCHECK = CONTEXT + '/sys/user/uncheck'
// 系统管理-批量用户审批
export const SYS_USERCHECK_BATCH = SYS_USERCHECK + '/batch'
// 系统管理-用户管理
export const SYS_USER = CONTEXT + '/sys/user'
// 系统管理-角色管理
export const SYS_ROLE = CONTEXT + '/sys/role'
// 系统管理-功能项管理
export const SYS_FUNCTION = CONTEXT + '/sys/function'
// 系统管理-菜单管理
export const SYS_MENU = CONTEXT + '/sys/menu'
// 系统管理-单位维护
export const SYS_ORGANIZATION = CONTEXT + '/sys/organization'
// 系统管理-平台日志
export const SYS_LOG = CONTEXT + '/sys/log'
// 访问日志
export const SYS_LOG_ACCESS = SYS_LOG + '/access'
// 错误日志
export const APP_ERROR_API = SYS_LOG + '/error'
// 操作日志
export const SYS_LOG_OPERATE = SYS_LOG + '/operate'
// 系统管理-白名单管理
export const SYS_WHITELIST = CONTEXT + '/sys/whitelist'
// 系统管理-字典管理
export const SYS_DICTIONARY = CONTEXT + '/sys/dict'
// 加载地区
export const SYS_REGION = CONTEXT + '/sys/region'

// 初始化数据库类型
export const SYS_DICT_DB_LIST = CONTEXT + '/sys/db'
