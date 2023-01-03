define("ace/snippets/ruby.snippets", [
  "require",
  "exports",
  "module",
], function (require, exports, module) {
  module.exports =
    '########################################\n# Ruby snippets - for Rails, see below #\n########################################\n\n# encoding for Ruby 1.9\nsnippet enc\n\t# encoding: utf-8\n\n# #!/usr/bin/env ruby\nsnippet #!\n\t#!/usr/bin/env ruby\n\t# encoding: utf-8\n\n# New Block\nsnippet =b\n\t=begin rdoc\n\t\t${1}\n\t=end\nsnippet y\n\t:yields: ${1:arguments}\nsnippet rb\n\t#!/usr/bin/env ruby -wKU\nsnippet beg\n\tbegin\n\t\t${3}\n\trescue ${1:Exception} => ${2:e}\n\tend\n\nsnippet req require\n\trequire "${1}"${2}\nsnippet #\n\t# =>\nsnippet end\n\t__END__\nsnippet case\n\tcase ${1:object}\n\twhen ${2:condition}\n\t\t${3}\n\tend\nsnippet when\n\twhen ${1:condition}\n\t\t${2}\nsnippet def\n\tdef ${1:method_name}\n\t\t${2}\n\tend\nsnippet deft\n\tdef test_${1:case_name}\n\t\t${2}\n\tend\nsnippet if\n\tif ${1:condition}\n\t\t${2}\n\tend\nsnippet ife\n\tif ${1:condition}\n\t\t${2}\n\telse\n\t\t${3}\n\tend\nsnippet elsif\n\telsif ${1:condition}\n\t\t${2}\nsnippet unless\n\tunless ${1:condition}\n\t\t${2}\n\tend\nsnippet while\n\twhile ${1:condition}\n\t\t${2}\n\tend\nsnippet for\n\tfor ${1:e} in ${2:c}\n\t\t${3}\n\tend\nsnippet until\n\tuntil ${1:condition}\n\t\t${2}\n\tend\nsnippet cla class .. end\n\tclass ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`}\n\t\t${2}\n\tend\nsnippet cla class .. initialize .. end\n\tclass ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`}\n\t\tdef initialize(${2:args})\n\t\t\t${3}\n\t\tend\n\tend\nsnippet cla class .. < ParentClass .. initialize .. end\n\tclass ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`} < ${2:ParentClass}\n\t\tdef initialize(${3:args})\n\t\t\t${4}\n\t\tend\n\tend\nsnippet cla ClassName = Struct .. do .. end\n\t${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`} = Struct.new(:${2:attr_names}) do\n\t\tdef ${3:method_name}\n\t\t\t${4}\n\t\tend\n\tend\nsnippet cla class BlankSlate .. initialize .. end\n\tclass ${1:BlankSlate}\n\t\tinstance_methods.each { |meth| undef_method(meth) unless meth =~ /\\A__/ }\n\tend\nsnippet cla class << self .. end\n\tclass << ${1:self}\n\t\t${2}\n\tend\n# class .. < DelegateClass .. initialize .. end\nsnippet cla-\n\tclass ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`} < DelegateClass(${2:ParentClass})\n\t\tdef initialize(${3:args})\n\t\t\tsuper(${4:del_obj})\n\n\t\t\t${5}\n\t\tend\n\tend\nsnippet mod module .. end\n\tmodule ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`}\n\t\t${2}\n\tend\nsnippet mod module .. module_function .. end\n\tmodule ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`}\n\t\tmodule_function\n\n\t\t${2}\n\tend\nsnippet mod module .. ClassMethods .. end\n\tmodule ${1:`substitute(Filename(), \'\\(_\\|^\\)\\(.\\)\', \'\\u\\2\', \'g\')`}\n\t\tmodule ClassMethods\n\t\t\t${2}\n\t\tend\n\n\t\tmodule InstanceMethods\n\n\t\tend\n\n\t\tdef self.included(receiver)\n\t\t\treceiver.extend         ClassMethods\n\t\t\treceiver.send :include, InstanceMethods\n\t\tend\n\tend\n# attr_reader\nsnippet r\n\tattr_reader :${1:attr_names}\n# attr_writer\nsnippet w\n\tattr_writer :${1:attr_names}\n# attr_accessor\nsnippet rw\n\tattr_accessor :${1:attr_names}\nsnippet atp\n\tattr_protected :${1:attr_names}\nsnippet ata\n\tattr_accessible :${1:attr_names}\n# include Enumerable\nsnippet Enum\n\tinclude Enumerable\n\n\tdef each(&block)\n\t\t${1}\n\tend\n# include Comparable\nsnippet Comp\n\tinclude Comparable\n\n\tdef <=>(other)\n\t\t${1}\n\tend\n# extend Forwardable\nsnippet Forw-\n\textend Forwardable\n# def self\nsnippet defs\n\tdef self.${1:class_method_name}\n\t\t${2}\n\tend\n# def method_missing\nsnippet defmm\n\tdef method_missing(meth, *args, &blk)\n\t\t${1}\n\tend\nsnippet defd\n\tdef_delegator :${1:@del_obj}, :${2:del_meth}, :${3:new_name}\nsnippet defds\n\tdef_delegators :${1:@del_obj}, :${2:del_methods}\nsnippet am\n\talias_method :${1:new_name}, :${2:old_name}\nsnippet app\n\tif __FILE__ == $PROGRAM_NAME\n\t\t${1}\n\tend\n# usage_if()\nsnippet usai\n\tif ARGV.${1}\n\t\tabort "Usage: #{$PROGRAM_NAME} ${2:ARGS_GO_HERE}"${3}\n\tend\n# usage_unless()\nsnippet usau\n\tunless ARGV.${1}\n\t\tabort "Usage: #{$PROGRAM_NAME} ${2:ARGS_GO_HERE}"${3}\n\tend\nsnippet array\n\tArray.new(${1:10}) { |${2:i}| ${3} }\nsnippet hash\n\tHash.new { |${1:hash}, ${2:key}| $1[$2] = ${3} }\nsnippet file File.foreach() { |line| .. }\n\tFile.foreach(${1:"path/to/file"}) { |${2:line}| ${3} }\nsnippet file File.read()\n\tFile.read(${1:"path/to/file"})${2}\nsnippet Dir Dir.global() { |file| .. }\n\tDir.glob(${1:"dir/glob/*"}) { |${2:file}| ${3} }\nsnippet Dir Dir[".."]\n\tDir[${1:"glob/**/*.rb"}]${2}\nsnippet dir\n\tFilename.dirname(__FILE__)\nsnippet deli\n\tdelete_if { |${1:e}| ${2} }\nsnippet fil\n\tfill(${1:range}) { |${2:i}| ${3} }\n# flatten_once()\nsnippet flao\n\tinject(Array.new) { |${1:arr}, ${2:a}| $1.push(*$2)}${3}\nsnippet zip\n\tzip(${1:enums}) { |${2:row}| ${3} }\n# downto(0) { |n| .. }\nsnippet dow\n\tdownto(${1:0}) { |${2:n}| ${3} }\nsnippet ste\n\tstep(${1:2}) { |${2:n}| ${3} }\nsnippet tim\n\ttimes { |${1:n}| ${2} }\nsnippet upt\n\tupto(${1:1.0/0.0}) { |${2:n}| ${3} }\nsnippet loo\n\tloop { ${1} }\nsnippet ea\n\teach { |${1:e}| ${2} }\nsnippet ead\n\teach do |${1:e}|\n\t\t${2}\n\tend\nsnippet eab\n\teach_byte { |${1:byte}| ${2} }\nsnippet eac- each_char { |chr| .. }\n\teach_char { |${1:chr}| ${2} }\nsnippet eac- each_cons(..) { |group| .. }\n\teach_cons(${1:2}) { |${2:group}| ${3} }\nsnippet eai\n\teach_index { |${1:i}| ${2} }\nsnippet eaid\n\teach_index do |${1:i}|\n\t\t${2}\n\tend\nsnippet eak\n\teach_key { |${1:key}| ${2} }\nsnippet eakd\n\teach_key do |${1:key}|\n\t\t${2}\n\tend\nsnippet eal\n\teach_line { |${1:line}| ${2} }\nsnippet eald\n\teach_line do |${1:line}|\n\t\t${2}\n\tend\nsnippet eap\n\teach_pair { |${1:name}, ${2:val}| ${3} }\nsnippet eapd\n\teach_pair do |${1:name}, ${2:val}|\n\t\t${3}\n\tend\nsnippet eas-\n\teach_slice(${1:2}) { |${2:group}| ${3} }\nsnippet easd-\n\teach_slice(${1:2}) do |${2:group}|\n\t\t${3}\n\tend\nsnippet eav\n\teach_value { |${1:val}| ${2} }\nsnippet eavd\n\teach_value do |${1:val}|\n\t\t${2}\n\tend\nsnippet eawi\n\teach_with_index { |${1:e}, ${2:i}| ${3} }\nsnippet eawid\n\teach_with_index do |${1:e},${2:i}|\n\t\t${3}\n\tend\nsnippet reve\n\treverse_each { |${1:e}| ${2} }\nsnippet reved\n\treverse_each do |${1:e}|\n\t\t${2}\n\tend\nsnippet inj\n\tinject(${1:init}) { |${2:mem}, ${3:var}| ${4} }\nsnippet injd\n\tinject(${1:init}) do |${2:mem}, ${3:var}|\n\t\t${4}\n\tend\nsnippet map\n\tmap { |${1:e}| ${2} }\nsnippet mapd\n\tmap do |${1:e}|\n\t\t${2}\n\tend\nsnippet mapwi-\n\tenum_with_index.map { |${1:e}, ${2:i}| ${3} }\nsnippet sor\n\tsort { |a, b| ${1} }\nsnippet sorb\n\tsort_by { |${1:e}| ${2} }\nsnippet ran\n\tsort_by { rand }\nsnippet all\n\tall? { |${1:e}| ${2} }\nsnippet any\n\tany? { |${1:e}| ${2} }\nsnippet cl\n\tclassify { |${1:e}| ${2} }\nsnippet col\n\tcollect { |${1:e}| ${2} }\nsnippet cold\n\tcollect do |${1:e}|\n\t\t${2}\n\tend\nsnippet det\n\tdetect { |${1:e}| ${2} }\nsnippet detd\n\tdetect do |${1:e}|\n\t\t${2}\n\tend\nsnippet fet\n\tfetch(${1:name}) { |${2:key}| ${3} }\nsnippet fin\n\tfind { |${1:e}| ${2} }\nsnippet find\n\tfind do |${1:e}|\n\t\t${2}\n\tend\nsnippet fina\n\tfind_all { |${1:e}| ${2} }\nsnippet finad\n\tfind_all do |${1:e}|\n\t\t${2}\n\tend\nsnippet gre\n\tgrep(${1:/pattern/}) { |${2:match}| ${3} }\nsnippet sub\n\t${1:g}sub(${2:/pattern/}) { |${3:match}| ${4} }\nsnippet sca\n\tscan(${1:/pattern/}) { |${2:match}| ${3} }\nsnippet scad\n\tscan(${1:/pattern/}) do |${2:match}|\n\t\t${3}\n\tend\nsnippet max\n\tmax { |a, b| ${1} }\nsnippet min\n\tmin { |a, b| ${1} }\nsnippet par\n\tpartition { |${1:e}| ${2} }\nsnippet pard\n\tpartition do |${1:e}|\n\t\t${2}\n\tend\nsnippet rej\n\treject { |${1:e}| ${2} }\nsnippet rejd\n\treject do |${1:e}|\n\t\t${2}\n\tend\nsnippet sel\n\tselect { |${1:e}| ${2} }\nsnippet seld\n\tselect do |${1:e}|\n\t\t${2}\n\tend\nsnippet lam\n\tlambda { |${1:args}| ${2} }\nsnippet doo\n\tdo\n\t\t${1}\n\tend\nsnippet dov\n\tdo |${1:variable}|\n\t\t${2}\n\tend\nsnippet :\n\t:${1:key} => ${2:"value"}${3}\nsnippet ope\n\topen(${1:"path/or/url/or/pipe"}, "${2:w}") { |${3:io}| ${4} }\n# path_from_here()\nsnippet fpath\n\tFile.join(File.dirname(__FILE__), *%2[${1:rel path here}])${2}\n# unix_filter {}\nsnippet unif\n\tARGF.each_line${1} do |${2:line}|\n\t\t${3}\n\tend\n# option_parse {}\nsnippet optp\n\trequire "optparse"\n\n\toptions = {${1:default => "args"}}\n\n\tARGV.options do |opts|\n\t\topts.banner = "Usage: #{File.basename($PROGRAM_NAME)}\nsnippet opt\n\topts.on( "-${1:o}", "--${2:long-option-name}", ${3:String},\n\t         "${4:Option description.}") do |${5:opt}|\n\t\t${6}\n\tend\nsnippet tc\n\trequire "test/unit"\n\n\trequire "${1:library_file_name}"\n\n\tclass Test${2:$1} < Test::Unit::TestCase\n\t\tdef test_${3:case_name}\n\t\t\t${4}\n\t\tend\n\tend\nsnippet ts\n\trequire "test/unit"\n\n\trequire "tc_${1:test_case_file}"\n\trequire "tc_${2:test_case_file}"${3}\nsnippet as\n\tassert ${1:test}, "${2:Failure message.}"${3}\nsnippet ase\n\tassert_equal ${1:expected}, ${2:actual}${3}\nsnippet asne\n\tassert_not_equal ${1:unexpected}, ${2:actual}${3}\nsnippet asid\n\tassert_in_delta ${1:expected_float}, ${2:actual_float}, ${3:2 ** -20}${4}\nsnippet asio\n\tassert_instance_of ${1:ExpectedClass}, ${2:actual_instance}${3}\nsnippet asko\n\tassert_kind_of ${1:ExpectedKind}, ${2:actual_instance}${3}\nsnippet asn\n\tassert_nil ${1:instance}${2}\nsnippet asnn\n\tassert_not_nil ${1:instance}${2}\nsnippet asm\n\tassert_match /${1:expected_pattern}/, ${2:actual_string}${3}\nsnippet asnm\n\tassert_no_match /${1:unexpected_pattern}/, ${2:actual_string}${3}\nsnippet aso\n\tassert_operator ${1:left}, :${2:operator}, ${3:right}${4}\nsnippet asr\n\tassert_raise ${1:Exception} { ${2} }\nsnippet asrd\n\tassert_raise ${1:Exception} do\n\t\t${2}\n\tend\nsnippet asnr\n\tassert_nothing_raised ${1:Exception} { ${2} }\nsnippet asnrd\n\tassert_nothing_raised ${1:Exception} do\n\t\t${2}\n\tend\nsnippet asrt\n\tassert_respond_to ${1:object}, :${2:method}${3}\nsnippet ass assert_same(..)\n\tassert_same ${1:expected}, ${2:actual}${3}\nsnippet ass assert_send(..)\n\tassert_send [${1:object}, :${2:message}, ${3:args}]${4}\nsnippet asns\n\tassert_not_same ${1:unexpected}, ${2:actual}${3}\nsnippet ast\n\tassert_throws :${1:expected} { ${2} }\nsnippet astd\n\tassert_throws :${1:expected} do\n\t\t${2}\n\tend\nsnippet asnt\n\tassert_nothing_thrown { ${1} }\nsnippet asntd\n\tassert_nothing_thrown do\n\t\t${1}\n\tend\nsnippet fl\n\tflunk "${1:Failure message.}"${2}\n# Benchmark.bmbm do .. end\nsnippet bm-\n\tTESTS = ${1:10_000}\n\tBenchmark.bmbm do |results|\n\t\t${2}\n\tend\nsnippet rep\n\tresults.report("${1:name}:") { TESTS.times { ${2} }}\n# Marshal.dump(.., file)\nsnippet Md\n\tFile.open(${1:"path/to/file.dump"}, "wb") { |${2:file}| Marshal.dump(${3:obj}, $2) }${4}\n# Mashal.load(obj)\nsnippet Ml\n\tFile.open(${1:"path/to/file.dump"}, "rb") { |${2:file}| Marshal.load($2) }${3}\n# deep_copy(..)\nsnippet deec\n\tMarshal.load(Marshal.dump(${1:obj_to_copy}))${2}\nsnippet Pn-\n\tPStore.new(${1:"file_name.pstore"})${2}\nsnippet tra\n\ttransaction(${1:true}) { ${2} }\n# xmlread(..)\nsnippet xml-\n\tREXML::Document.new(File.read(${1:"path/to/file"}))${2}\n# xpath(..) { .. }\nsnippet xpa\n\telements.each(${1:"//Xpath"}) do |${2:node}|\n\t\t${3}\n\tend\n# class_from_name()\nsnippet clafn\n\tsplit("::").inject(Object) { |par, const| par.const_get(const) }\n# singleton_class()\nsnippet sinc\n\tclass << self; self end\nsnippet nam\n\tnamespace :${1:`Filename()`} do\n\t\t${2}\n\tend\nsnippet tas\n\tdesc "${1:Task description}"\n\ttask :${2:task_name => [:dependent, :tasks]} do\n\t\t${3}\n\tend\n# block\nsnippet b\n\t{ |${1:var}| ${2} }\nsnippet begin\n\tbegin\n\t\traise \'A test exception.\'\n\trescue Exception => e\n\t\tputs e.message\n\t\tputs e.backtrace.inspect\n\telse\n\t\t# other exception\n\tensure\n\t\t# always executed\n\tend\n\n#debugging\nsnippet debug\n\trequire \'ruby-debug\'; debugger; true;\nsnippet pry\n\trequire \'pry\'; binding.pry\n\n#############################################\n# Rails snippets - for pure Ruby, see above #\n#############################################\nsnippet art\n\tassert_redirected_to ${1::action => "${2:index}"}\nsnippet artnp\n\tassert_redirected_to ${1:parent}_${2:child}_path(${3:@$1}, ${4:@$2})\nsnippet artnpp\n\tassert_redirected_to ${1:parent}_${2:child}_path(${3:@$1})\nsnippet artp\n\tassert_redirected_to ${1:model}_path(${2:@$1})\nsnippet artpp\n\tassert_redirected_to ${1:model}s_path\nsnippet asd\n\tassert_difference "${1:Model}.${2:count}", $1 do\n\t\t${3}\n\tend\nsnippet asnd\n\tassert_no_difference "${1:Model}.${2:count}" do\n\t\t${3}\n\tend\nsnippet asre\n\tassert_response :${1:success}, @response.body${2}\nsnippet asrj\n\tassert_rjs :${1:replace}, "${2:dom id}"\nsnippet ass assert_select(..)\n\tassert_select \'${1:path}\', :${2:text} => \'${3:inner_html\' ${4:do}\nsnippet bf\n\tbefore_filter :${1:method}\nsnippet bt\n\tbelongs_to :${1:association}\nsnippet crw\n\tcattr_accessor :${1:attr_names}\nsnippet defcreate\n\tdef create\n\t\t@${1:model_class_name} = ${2:ModelClassName}.new(params[:$1])\n\n\t\trespond_to do |wants|\n\t\t\tif @$1.save\n\t\t\t\tflash[:notice] = \'$2 was successfully created.\'\n\t\t\t\twants.html { redirect_to(@$1) }\n\t\t\t\twants.xml  { render :xml => @$1, :status => :created, :location => @$1 }\n\t\t\telse\n\t\t\t\twants.html { render :action => "new" }\n\t\t\t\twants.xml  { render :xml => @$1.errors, :status => :unprocessable_entity }\n\t\t\tend\n\t\tend\n\tend${3}\nsnippet defdestroy\n\tdef destroy\n\t\t@${1:model_class_name} = ${2:ModelClassName}.find(params[:id])\n\t\t@$1.destroy\n\n\t\trespond_to do |wants|\n\t\t\twants.html { redirect_to($1s_url) }\n\t\t\twants.xml  { head :ok }\n\t\tend\n\tend${3}\nsnippet defedit\n\tdef edit\n\t\t@${1:model_class_name} = ${2:ModelClassName}.find(params[:id])\n\tend\nsnippet defindex\n\tdef index\n\t\t@${1:model_class_name} = ${2:ModelClassName}.all\n\n\t\trespond_to do |wants|\n\t\t\twants.html # index.html.erb\n\t\t\twants.xml  { render :xml => @$1s }\n\t\tend\n\tend${3}\nsnippet defnew\n\tdef new\n\t\t@${1:model_class_name} = ${2:ModelClassName}.new\n\n\t\trespond_to do |wants|\n\t\t\twants.html # new.html.erb\n\t\t\twants.xml  { render :xml => @$1 }\n\t\tend\n\tend${3}\nsnippet defshow\n\tdef show\n\t\t@${1:model_class_name} = ${2:ModelClassName}.find(params[:id])\n\n\t\trespond_to do |wants|\n\t\t\twants.html # show.html.erb\n\t\t\twants.xml  { render :xml => @$1 }\n\t\tend\n\tend${3}\nsnippet defupdate\n\tdef update\n\t\t@${1:model_class_name} = ${2:ModelClassName}.find(params[:id])\n\n\t\trespond_to do |wants|\n\t\t\tif @$1.update_attributes(params[:$1])\n\t\t\t\tflash[:notice] = \'$2 was successfully updated.\'\n\t\t\t\twants.html { redirect_to(@$1) }\n\t\t\t\twants.xml  { head :ok }\n\t\t\telse\n\t\t\t\twants.html { render :action => "edit" }\n\t\t\t\twants.xml  { render :xml => @$1.errors, :status => :unprocessable_entity }\n\t\t\tend\n\t\tend\n\tend${3}\nsnippet flash\n\tflash[:${1:notice}] = "${2}"\nsnippet habtm\n\thas_and_belongs_to_many :${1:object}, :join_table => "${2:table_name}", :foreign_key => "${3}_id"${4}\nsnippet hm\n\thas_many :${1:object}\nsnippet hmd\n\thas_many :${1:other}s, :class_name => "${2:$1}", :foreign_key => "${3:$1}_id", :dependent => :destroy${4}\nsnippet hmt\n\thas_many :${1:object}, :through => :${2:object}\nsnippet ho\n\thas_one :${1:object}\nsnippet i18\n\tI18n.t(\'${1:type.key}\')${2}\nsnippet ist\n\t<%= image_submit_tag("${1:agree.png}", :id => "${2:id}"${3} %>\nsnippet log\n\tRails.logger.${1:debug} ${2}\nsnippet log2\n\tRAILS_DEFAULT_LOGGER.${1:debug} ${2}\nsnippet logd\n\tlogger.debug { "${1:message}" }${2}\nsnippet loge\n\tlogger.error { "${1:message}" }${2}\nsnippet logf\n\tlogger.fatal { "${1:message}" }${2}\nsnippet logi\n\tlogger.info { "${1:message}" }${2}\nsnippet logw\n\tlogger.warn { "${1:message}" }${2}\nsnippet mapc\n\t${1:map}.${2:connect} \'${3:controller/:action/:id}\'\nsnippet mapca\n\t${1:map}.catch_all "*${2:anything}", :controller => "${3:default}", :action => "${4:error}"${5}\nsnippet mapr\n\t${1:map}.resource :${2:resource}\nsnippet maprs\n\t${1:map}.resources :${2:resource}\nsnippet mapwo\n\t${1:map}.with_options :${2:controller} => \'${3:thing}\' do |$3|\n\t\t${4}\n\tend\nsnippet mbs\n\tbefore_save :${1:method}\nsnippet mcht\n\tchange_table :${1:table_name} do |t|\n\t\t${2}\n\tend\nsnippet mp\n\tmap(&:${1:id})\nsnippet mrw\n\tmattr_accessor :${1:attr_names}\nsnippet oa\n\torder("${1:field}")\nsnippet od\n\torder("${1:field} DESC")\nsnippet pa\n\tparams[:${1:id}]${2}\nsnippet ra\n\trender :action => "${1:action}"\nsnippet ral\n\trender :action => "${1:action}", :layout => "${2:layoutname}"\nsnippet rest\n\trespond_to do |wants|\n\t\twants.${1:html} { ${2} }\n\tend\nsnippet rf\n\trender :file => "${1:filepath}"\nsnippet rfu\n\trender :file => "${1:filepath}", :use_full_path => ${2:false}\nsnippet ri\n\trender :inline => "${1:<%= \'hello\' %>}"\nsnippet ril\n\trender :inline => "${1:<%= \'hello\' %>}", :locals => { ${2::name} => "${3:value}"${4} }\nsnippet rit\n\trender :inline => "${1:<%= \'hello\' %>}", :type => ${2::rxml}\nsnippet rjson\n\trender :json => ${1:text to render}\nsnippet rl\n\trender :layout => "${1:layoutname}"\nsnippet rn\n\trender :nothing => ${1:true}\nsnippet rns\n\trender :nothing => ${1:true}, :status => ${2:401}\nsnippet rp\n\trender :partial => "${1:item}"\nsnippet rpc\n\trender :partial => "${1:item}", :collection => ${2:@$1s}\nsnippet rpl\n\trender :partial => "${1:item}", :locals => { :${2:$1} => ${3:@$1}\nsnippet rpo\n\trender :partial => "${1:item}", :object => ${2:@$1}\nsnippet rps\n\trender :partial => "${1:item}", :status => ${2:500}\nsnippet rt\n\trender :text => "${1:text to render}"\nsnippet rtl\n\trender :text => "${1:text to render}", :layout => "${2:layoutname}"\nsnippet rtlt\n\trender :text => "${1:text to render}", :layout => ${2:true}\nsnippet rts\n\trender :text => "${1:text to render}", :status => ${2:401}\nsnippet ru\n\trender :update do |${1:page}|\n\t\t$1.${2}\n\tend\nsnippet rxml\n\trender :xml => ${1:text to render}\nsnippet sc\n\tscope :${1:name}, :where(:@${2:field} => ${3:value})\nsnippet sl\n\tscope :${1:name}, lambda do |${2:value}|\n\t\twhere("${3:field = ?}", ${4:bind var})\n\tend\nsnippet sha1\n\tDigest::SHA1.hexdigest(${1:string})\nsnippet sweeper\n\tclass ${1:ModelClassName}Sweeper < ActionController::Caching::Sweeper\n\t\tobserve $1\n\n\t\tdef after_save(${2:model_class_name})\n\t\t\texpire_cache($2)\n\t\tend\n\n\t\tdef after_destroy($2)\n\t\t\texpire_cache($2)\n\t\tend\n\n\t\tdef expire_cache($2)\n\t\t\texpire_page\n\t\tend\n\tend\nsnippet tcb\n\tt.boolean :${1:title}\n\t${2}\nsnippet tcbi\n\tt.binary :${1:title}, :limit => ${2:2}.megabytes\n\t${3}\nsnippet tcd\n\tt.decimal :${1:title}, :precision => ${2:10}, :scale => ${3:2}\n\t${4}\nsnippet tcda\n\tt.date :${1:title}\n\t${2}\nsnippet tcdt\n\tt.datetime :${1:title}\n\t${2}\nsnippet tcf\n\tt.float :${1:title}\n\t${2}\nsnippet tch\n\tt.change :${1:name}, :${2:string}, :${3:limit} => ${4:80}\n\t${5}\nsnippet tci\n\tt.integer :${1:title}\n\t${2}\nsnippet tcl\n\tt.integer :lock_version, :null => false, :default => 0\n\t${1}\nsnippet tcr\n\tt.references :${1:taggable}, :polymorphic => { :default => \'${2:Photo}\' }\n\t${3}\nsnippet tcs\n\tt.string :${1:title}\n\t${2}\nsnippet tct\n\tt.text :${1:title}\n\t${2}\nsnippet tcti\n\tt.time :${1:title}\n\t${2}\nsnippet tcts\n\tt.timestamp :${1:title}\n\t${2}\nsnippet tctss\n\tt.timestamps\n\t${1}\nsnippet va\n\tvalidates_associated :${1:attribute}\nsnippet vao\n\tvalidates_acceptance_of :${1:terms}\nsnippet vc\n\tvalidates_confirmation_of :${1:attribute}\nsnippet ve\n\tvalidates_exclusion_of :${1:attribute}, :in => ${2:%w( mov avi )}\nsnippet vf\n\tvalidates_format_of :${1:attribute}, :with => /${2:regex}/\nsnippet vi\n\tvalidates_inclusion_of :${1:attribute}, :in => %w(${2: mov avi })\nsnippet vl\n\tvalidates_length_of :${1:attribute}, :within => ${2:3}..${3:20}\nsnippet vn\n\tvalidates_numericality_of :${1:attribute}\nsnippet vpo\n\tvalidates_presence_of :${1:attribute}\nsnippet vu\n\tvalidates_uniqueness_of :${1:attribute}\nsnippet wants\n\twants.${1:js|xml|html} { ${2} }\nsnippet wc\n\twhere(${1:"conditions"}${2:, bind_var})\nsnippet wh\n\twhere(${1:field} => ${2:value})\nsnippet xdelete\n\txhr :delete, :${1:destroy}, :id => ${2:1}${3}\nsnippet xget\n\txhr :get, :${1:show}, :id => ${2:1}${3}\nsnippet xpost\n\txhr :post, :${1:create}, :${2:object} => { ${3} }\nsnippet xput\n\txhr :put, :${1:update}, :id => ${2:1}, :${3:object} => { ${4} }${5}\nsnippet test\n\ttest "should ${1:do something}" do\n\t\t${2}\n\tend\n#migrations\nsnippet mac\n\tadd_column :${1:table_name}, :${2:column_name}, :${3:data_type}\nsnippet mrc\n\tremove_column :${1:table_name}, :${2:column_name}\nsnippet mrnc\n\trename_column :${1:table_name}, :${2:old_column_name}, :${3:new_column_name}\nsnippet mcc\n\tchange_column :${1:table}, :${2:column}, :${3:type}\nsnippet mccc\n\tt.column :${1:title}, :${2:string}\nsnippet mct\n\tcreate_table :${1:table_name} do |t|\n\t\tt.column :${2:name}, :${3:type}\n\tend\nsnippet migration\n\tclass ${1:class_name} < ActiveRecord::Migration\n\t\tdef self.up\n\t\t\t${2}\n\t\tend\n\n\t\tdef self.down\n\t\tend\n\tend\n\nsnippet trc\n\tt.remove :${1:column}\nsnippet tre\n\tt.rename :${1:old_column_name}, :${2:new_column_name}\n\t${3}\nsnippet tref\n\tt.references :${1:model}\n\n#rspec\nsnippet it\n\tit "${1:spec_name}" do\n\t\t${2}\n\tend\nsnippet itp\n\tit "${1:spec_name}"\n\t${2}\nsnippet desc\n\tdescribe ${1:class_name} do\n\t\t${2}\n\tend\nsnippet cont\n\tcontext "${1:message}" do\n\t\t${2}\n\tend\nsnippet bef\n\tbefore :${1:each} do\n\t\t${2}\n\tend\nsnippet aft\n\tafter :${1:each} do\n\t\t${2}\n\tend\n';
});

define("ace/snippets/ruby", [
  "require",
  "exports",
  "module",
  "ace/snippets/ruby.snippets",
], function (require, exports, module) {
  "use strict";
  exports.snippetText = require("./ruby.snippets");
  exports.scope = "ruby";
});
(function () {
  window.require(["ace/snippets/ruby"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
