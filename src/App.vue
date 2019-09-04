<template>
	<div 
		id="app-main" 
		class="app-main app-side-mins">
		<div 
			id="nav" 
			class="app-slide app-side-min">
			<div class="slide-content gradient-red">
				<div class="app-title">
	                <div class="col-1">
	                  <h1 class="txt-site txt-white txt-upp txt-18 txt-bold post-center margin-left-10px">
	                    ADMIN KEM
	                  </h1>
	                </div>
	                <div class="col-2"></div>
	            </div>
				<div class="slide-list change-scrollbar">

					<div class="app-space-content">
						<div class="app-menu">
							<router-link to="/">
								<li class="a-m-content">
									<div class="a-m-list">
										<div class="a-m-icn">
											<i class='fa fa-lg fa-home'></i>
										</div>
										<div class="a-m-ttl">
											Dashboard
										</div>
										<div class="a-m-icn a-m-icn-right txt-site txt-right txt-12"></div>
									</div>
								</li>
							</router-link>
						</div>
					</div>

					<div class="app-space">
                    	<input type="checkbox" name="mainmenu" checked="true" id="mainmenu-master-data" />
						<label for="mainmenu-master-data" class="a-m-list">
							<span class="app-space-icon">
								<i class="fa fa-1x fa-database" />
							</span>
							<span class="app-space-text">
								Master Data
							</span>
							<span class="app-space-sign"></span>
						</label>
						<div class="app-space-content">
							<div class="app-menu">
								<router-link to="/texts">
									<li class="a-m-content">
										<div class="a-m-list">
											<div class="a-m-icn">
												<i class='fa fa-lg fa-book'></i>
											</div>
											<div class="a-m-ttl">
												Data Bacaan
											</div>
											<div class="a-m-icn a-m-icn-right txt-site txt-right txt-12"></div>
										</div>
									</li>
								</router-link>
								<router-link to="/students">
									<li class="a-m-content">
										<div class="a-m-list">
											<div class="a-m-icn">
												<i class='fa fa-lg fa-users'></i>
											</div>
											<div class="a-m-ttl">
												Data Siswa
											</div>
											<div class="a-m-icn a-m-icn-right txt-site txt-right txt-12"></div>
										</div>
									</li>
								</router-link>
								<router-link to="/kem">
									<li class="a-m-content">
										<div class="a-m-list">
											<div class="a-m-icn">
												<i class='fa fa-lg fa-chart-pie'></i>
											</div>
											<div class="a-m-ttl">
												Data Hasil KEM
											</div>
											<div class="a-m-icn a-m-icn-right txt-site txt-right txt-12"></div>
										</div>
									</li>
								</router-link>
							</div>
						</div>
                  	</div>

					<div class="app-space">
                    	<input type="checkbox" name="mainmenu" checked="true" id="mainmenu-data-siswa" />
						<label for="mainmenu-data-siswa" class="a-m-list">
							<span class="app-space-icon">
								<i class="fa fa-1x fa-database" />
							</span>
							<span class="app-space-text">
								Akun
							</span>
							<span class="app-space-sign"></span>
						</label>
						<div class="app-space-content">
							<div class="app-menu">
								<router-link to="/">
									<li class="a-m-content">
										<div class="a-m-list">
											<div class="a-m-icn">
												<i class='fa fa-lg fa-cogs'></i>
											</div>
											<div class="a-m-ttl">
												Pengaturan Akun
											</div>
											<div class="a-m-icn a-m-icn-right txt-site txt-right txt-12"></div>
										</div>
									</li>
								</router-link>
							</div>
							<div class="app-menu">
								<router-link to="/">
									<li class="a-m-content">
										<div class="a-m-list">
											<div class="a-m-icn">
												<i class='fa fa-lg fa-key'></i>
											</div>
											<div class="a-m-ttl">
												Ubah Password
											</div>
											<div class="a-m-icn a-m-icn-right txt-site txt-right txt-12"></div>
										</div>
									</li>
								</router-link>
								<router-link to="/">
									<li class="a-m-content">
										<div class="a-m-list">
											<div class="a-m-icn">
												<i class='fa fa-lg fa-mask'></i>
											</div>
											<div class="a-m-ttl">
												Ubah Avatar
											</div>
											<div class="a-m-icn a-m-icn-right txt-site txt-right txt-12"></div>
										</div>
									</li>
								</router-link>
							</div>
						</div>
                  	</div>

					<div class="app-space">
                    	<input type="checkbox" name="mainmenu" checked="true" id="mainmenu-others" />
						<label for="mainmenu-others" class="a-m-list">
							<span class="app-space-icon">
								<i class="fa fa-1x fa-database" />
							</span>
							<span class="app-space-text">
								Lainya
							</span>
							<span class="app-space-sign"></span>
						</label>
						<div class="app-space-content">
							<div class="app-menu">
								<router-link to="/about">
									<li class="a-m-content">
										<div class="a-m-list">
											<div class="a-m-icn">
												<i class='fa fa-lg fa-info-circle'></i>
											</div>
											<div class="a-m-ttl">
												Tentang Kami
											</div>
											<div class="a-m-icn a-m-icn-right txt-site txt-right txt-12"></div>
										</div>
									</li>
								</router-link>
							</div>
						</div>
					</div>

					<div class="app-space-content">
						<div class="app-menu">
							<router-link to="/logout">
								<li class="a-m-content">
									<div class="a-m-list">
										<div class="a-m-icn">
											<i class='fa fa-lg fa-power-off'></i>
										</div>
										<div class="a-m-ttl">
											Logout
										</div>
										<div class="a-m-icn a-m-icn-right txt-site txt-right txt-12"></div>
									</div>
								</li>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="main" class="app-main-place">
			<div class="app-main-content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import url('./assets/icons/fontawesome/css/all.min.css');
	@import url('./assets/scss/app.css');
</style>
