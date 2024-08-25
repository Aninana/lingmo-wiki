import{_ as o}from"./chunks/desktop.DXvsyRPb.js";import{_ as t,c as e,o as s,a5 as i}from"./chunks/framework.B9ajF9kL.js";const l="/assets/live-boot-choose.BELbukUF.png",a="/assets/live-boot-login.BPD42Ins.png",n="/assets/live-boot-desktop.A9LA0esf.png",c="/assets/install-step-1.D73ypNDx.png",r="/assets/install-step-2.BKzd_Y6o.png",d="/assets/install-step-3.BKUXFgNG.png",g="/assets/install-step-4.QW9Q6wKn.png",p="/assets/install-step-5.ZLAh3WGI.png",m="/assets/install-step-6.CKtBOaQz.png",_="/assets/install-step-7.BhiOd6i6.png",h="/assets/install-complete.k0abuYAN.png",S="/assets/login.DmnFkuUc.png",x=JSON.parse('{"title":"Lingmo OS 安装教程","description":"","frontmatter":{"prev":false,"next":false},"headers":[],"relativePath":"zh/debian/system/installation.md","filePath":"zh/debian/system/installation.md"}'),L={name:"zh/debian/system/installation.md"},f=i('<h1 id="lingmo-os-安装教程" tabindex="-1">Lingmo OS 安装教程 <a class="header-anchor" href="#lingmo-os-安装教程" aria-label="Permalink to &quot;Lingmo OS 安装教程&quot;">​</a></h1><p><em>警告：在适用法律允许的范围内，Lingmo GNU/Linux 不提供任何担保。</em></p><p>本文将指导您如何安装 <code>Lingmo OS</code>。</p><h3 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h3><ol><li><p>下载并安装 <code>Lingmo OS</code> 的镜像文件。您可以在 <a href="https://www.lingmo.org/zh-cn/downloads" target="_blank" rel="noreferrer">Lingmo OS 下载页面</a> 下载最新版本的 <code>ISO</code> 安装镜像或在 <a href="https://github.com/LingmoOS-Testing/live-build-config/actions" target="_blank" rel="noreferrer">Github Actions</a> 页面下载最新测试版的 <code>ISO</code> 安装镜像。</p><p>注意：测试版具有一定的不稳定性，如果您是小白，建议您下载正式版。</p></li><li><p>准备一个 U 盘或移动硬盘，要求容量至少为 16 GB，并将其格式化为 FAT32 或 NTFS 文件系统。</p></li><li><p><a href="https://rufus.ie/" target="_blank" rel="noreferrer">下载</a>并安装 <code>Rufus</code> 写盘软件，用于将 U 盘制作成用于安装系统的启动盘。</p></li></ol><h3 id="安装-lingmo-os" tabindex="-1">安装 Lingmo OS <a class="header-anchor" href="#安装-lingmo-os" aria-label="Permalink to &quot;安装 Lingmo OS&quot;">​</a></h3><ol><li>将待安装设备保持关机状态，插入 U 盘或移动硬盘，按下开机键，同时根据自己的机型连续多次按下进入启动顺序设置界面的按键（一般为 <code>F12</code>），并通过上下键将您的 U 盘或移动硬盘设为第一启动设备。</li><li>等待 U 盘或移动硬盘启动，系统会自动检测到并加载 <code>Lingmo OS</code> 的安装镜像。 此时直接按下 <code>Enter</code> 键，即可进入 <code>Lingmo OS</code> 的安装程序。 <img src="'+l+'" loading="lazy" alt="Live Boot Choose"><strong><code>Lingmo Live User</code> 的默认密码为 <code>live</code></strong>，输入后单击 <code>Login</code> 按钮即可进入 <code>Live</code> 系统。 <img src="'+a+'" loading="lazy" alt="Live Boot Login"> 此时双击桌面上的 <code>Install Lingmo OS</code> 即可进入安装程序。 <img src="'+n+'" loading="lazy" alt="Live Boot desktop"></li><li>安装程序默认为英文，单击列表即可切换为简体中文。 <img src="'+c+'" loading="lazy" alt="Install Step 1"></li><li>设置位置。在地图上单击靠近上海的位置即可自动定位至上海。 <img src="'+r+'" loading="lazy" alt="Install Step 2"></li><li>设置键盘。你可以根据自己的喜好设置自己想要的键盘布局。当然如果您不知道这是什么，亦可保持默认设置，不会影响后续使用。 <img src="'+d+'" loading="lazy" alt="Install Step 3"></li><li>磁盘分区。这一步首先需要您单击 <code>选择存储器</code> 右侧的列表，在弹出的列表中选择需要安装 <code>Lingmo OS</code> 的磁盘。接下来，建议您直接选择 <code>抹除磁盘</code> 选项，当然如果您对磁盘分区有一定经验，亦可自行对磁盘进行分区。 <img src="'+g+'" loading="lazy" alt="Install Step 4"></li><li>设置用户。这一步中您可以设置您的用户名、计算机名称以及您的登录密码。<strong>注意：系统安装完毕后，您在这一步设置的用户即您的登录用户，而非 <code>root</code> 用户，请牢记您的密码。</strong><img src="'+p+'" loading="lazy" alt="Install Step 5"></li><li>安装摘要。在这一步中，系统会显示您刚才的设置，确认无误后即可单击 <code>安装</code> 按钮开始安装。 <img src="'+m+'" loading="lazy" alt="Install Step 6"></li><li>开始安装。安装过程中，系统会显示安装进度。等待安装完毕后，即可重启进入 <code>Lingmo OS</code> 的登录界面。 <img src="'+_+'" loading="lazy" alt="Install Step 8"></li><li>安装完成。重启计算机，并拔出您的安装介质。再次开机后，即可开始体验激动人心的 <code>Lingmo OS</code>！ <img src="'+h+'" loading="lazy" alt="Install Complete"><img src="'+S+'" loading="lazy" alt="Login"><img src="'+o+'" loading="lazy" alt="Desktop"></li></ol>',7),u=[f];function b(O,z,y,I,k,v){return s(),e("div",null,u)}const A=t(L,[["render",b]]);export{x as __pageData,A as default};
